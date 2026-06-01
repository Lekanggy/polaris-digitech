# Master's Thesis Proposal

## Understanding the Gated Memory: A Mechanistic Analysis of Erase and Write Dynamics in Gated DeltaNet‑2

---

## 1. Background

Linear attention offers a compelling alternative to standard softmax attention, replacing the sequence-length‑dependent KV cache with a fixed‑size recurrent state. This innovation reduces sequence mixing to linear time and decoding to constant memory. The core challenge lies not in what to forget, but in how to edit a compressed memory without scrambling existing associations.

The delta rule—borrowed from online gradient descent—provides a principled mechanism for updating a recurrent state. Schlag et al. (2021) first introduced DeltaNet, a linear transformer variant that uses a delta‑rule‑like update to retrieve and update value vectors associated with the current key. Yang et al. (ICLR 2025) then proposed Gated DeltaNet, which added a gating mechanism to balance forgetting and update magnitude, consistently outperforming Mamba‑2 and DeltaNet across language modeling, common‑sense reasoning, and retrieval benchmarks.

Kimi Delta Attention (KDA) extended this further with finer‑grained, channel‑wise gating, improving memory management and hardware efficiency. However, both Gated DeltaNet and KDA share a fundamental limitation: a scalar tie between erasing and writing. In these architectures, the same scalar parameter governs both the forgetting of old information and the integration of new information, creating an inherent trade‑off that limits memory control.

**Gated DeltaNet‑2** (Hatamizadeh, Choi, & Kautz, May 2026) directly addresses this limitation. The model decouples erase and write operations through distinct channel‑wise gates—an erase gate *b_t* and a write gate *w_t*—freeing the model to forget and update independently. When both gates converge to the same scalar, Gated DeltaNet‑2 simplifies to KDA; with additional decay convergence, it reduces to Gated DeltaNet.

Trained at 1.3 billion parameters on 100 billion FineWeb‑Edu tokens, Gated DeltaNet‑2 achieves the strongest overall results among Mamba‑2, Gated DeltaNet, KDA, and Mamba‑3 variants across language modeling, common‑sense reasoning, and retrieval tasks.

While the original report rigorously benchmarks downstream performance, it leaves a crucial question unanswered: *Why* does decoupling erase and write improve memory management? What, mechanistically, changes in how the model retains, overwrites, and recalls information?

This thesis addresses precisely that gap.

---

## 2. Literature Review

### 2.1 Linear Attention and the Delta Rule

The delta rule, interpreted as a closed‑form online stochastic gradient descent (SGD) update, has become a unifying framework for modern linear recurrent models. Mamba‑2, Gated DeltaNet, and KDA all view their recurrences through this lens, with the recurrent state serving as a compressed memory that is updated at each step.

DeltaNet implements a first‑order linear recurrence with generalized Householder transition matrices ($\mathbf{I} - \beta_t \mathbf{k}_t \mathbf{k}_t^\top$), enabling superior associative recall compared to additive updates. Gated DeltaNet extends this by introducing explicit forgetting through a time‑dependent decay factor αt, viewing the recurrence as an approximate Kalman filter recursion for a fading dynamical system.

### 2.2 The Forgotten Question: Mechanistic Understanding

Performance benchmarks—perplexity, accuracy, retrieval success—tell us *what* a model achieves but not *how* it achieves it. Recent work has recognized this deficiency: “While performance on synthetic tasks like Associative Recall (AR) can point to this deficiency, behavioural metrics provide little information as to *why*—on a mechanistic level—certain architectures fail and others succeed”.

Probing studies have examined associative recall in Transformers and state‑space models, but systematic mechanistic analysis of gate dynamics in linear attention remains scarce. Studies comparing linear architectures at scale have documented stable performance hierarchies, but have not opened the black box. This thesis fills that gap by applying probing and causal intervention techniques specifically to Gated DeltaNet‑2.

### 2.3 Positioning This Work

| Related Work | Focus | Gap This Thesis Addresses |
|--------------|-------|----------------------------|
| Yang et al. (ICLR 2025) – Gated DeltaNet | Benchmark performance | No mechanistic analysis |
| Hatamizadeh et al. (2026) – Gated DeltaNet‑2 | Benchmark performance + architecture | No mechanistic analysis |
| KDA (Kimi Linear, 2025) | Benchmark performance | No mechanistic analysis |
| FG²‑GDN (2026) | Associative recall benchmarks | No gate‑level analysis |
| Mechanistic evaluation (2026) | Behavioral metrics on synthetic tasks | No gate‑specific analysis |

This thesis is the **first** to systematically analyze the internal memory dynamics of Gated DeltaNet‑2, focusing specifically on how decoupled erase and write gates affect information retention and interference.

---

## 3. Research Questions and Objectives

### Core Research Question

> *How does decoupling the erase and write gates in Gated DeltaNet‑2 affect the model’s ability to retain, overwrite, and recall information over long sequences, compared to Gated DeltaNet and Mamba‑2?*

### Sub‑Questions

1. **Retention**: How does the memory retention curve (accuracy vs. distance) differ between Gated DeltaNet‑2 and its predecessors?

2. **Interference**: When multiple key–value pairs are written sequentially, how effectively does Gated DeltaNet‑2 preserve earlier associations compared to models with scalar‑tied erase‑write?

3. **Gate Specialisation**: Do the erase and write gates learn distinct, interpretable roles across different input contexts? Are they correlated or independent?

4. **Causal Role**: Can we verify causality by independently controlling erase and write gates? Does disabling one gate produce predictable effects on memory behavior?

5. **Upper Bound**: Where does perfect memory lie? How do linear recurrent architectures compare to a full‑attention Transformer of equivalent size?

### Thesis Objectives

- **O1**: Implement extraction utilities for gate values and hidden states from Gated DeltaNet‑2, Gated DeltaNet, and Mamba‑2.
- **O2**: Design and implement a probing suite of synthetic tasks targeting associative recall, multi‑value binding, and long‑range dependency.
- **O3**: Run systematic experiments across model variants and sequence lengths.
- **O4**: Perform statistical analysis of gate behaviour and causal interventions.
- **O5**: Produce an open‑source codebase for reproducible probing of linear recurrent models.

---

## 4. Technical Methodology

### 4.1 Models and Access

| Model | Source | Parameter Sizes | Key Feature |
|-------|--------|----------------|-------------|
| Gated DeltaNet‑2 | NVIDIA/NVlabs (GitHub) | 1.3B, smaller variants | Decoupled erase/write gates |
| Gated DeltaNet (v1) | NVlabs/GatedDeltaNet (ICLR 2025) | 1.3B, smaller variants | Scalar‑tied erase‑write |
| Mamba‑2 | State‑space model implementation | 1.3B equivalent | No delta rule, additive updates |
| Transformer (baseline) | Standard implementation | 125M–350M | Upper bound on perfect memory |

All code and pre‑trained weights for Gated DeltaNet‑2 are publicly available at the official GitHub repository.

### 4.2 Probing Task Design

#### Task 1: Associative Recall (Distance Sensitivity)

**Format**: A sequence of `(key, value)` pairs followed by a query key. The model must produce the associated value.

**Structure**:
```
[K1] [V1] [K2] [V2] ... [Kd] [Vd] [Q = Ki] [Target = Vi]
```

**Variables**: Distance (number of intervening tokens between key–value pair and query), number of pairs (memory load), repetition patterns.

**Metric**: Exact‑match accuracy.

#### Task 2: Multi‑Value Binding (Interference)

**Format**: The same key appears multiple times with different values. The model must recall the most recent value (recency) or a specific version (selective recall).

**Structure**:
```
[K] [V1] ... [K] [V2] ... [K] [V3] ... [Q = K]
```

**Variables**: Number of bindings for the same key, distance from each binding to query, value similarity.

**Metric**: Accuracy of recalling correct binding version.

#### Task 3: Sequential Write and Overwrite (Interference)

**Format**: Key–value pairs are written sequentially, but queries interleave during the writing process.

**Structure**:
```
[K1] [V1] [Q = K1] [K2] [V2] [Q = K1] [K3] [V3] [Q = K1]
```

**Variables**: Number of writes between key presentation and query, order of writes.

**Metric**: Accuracy decay curve.

#### Task 4: Long‑Range Dependency (Distance Extrapolation)

**Format**: Simple dependency where token A must be recalled after a long filler sequence.

**Structure**:
```
[A] [filler tokens] [Q = A?]
```

**Variables**: Filler length (up to 32k tokens), filler type (random tokens vs. repeated patterns).

**Metric**: Accuracy as function of distance.

### 4.3 Gate Analysis

For each token position $t$, we extract:

- Erase gate vector $\mathbf{b}_t \in \mathbb{R}^d$
- Write gate vector $\mathbf{w}_t \in \mathbb{R}^d$
- Hidden state $\mathbf{h}_t \in \mathbb{R}^d$
- Input token and attention values

**Analyses**:

1. **Distributions**: Visualize $\mathbf{b}_t$ and $\mathbf{w}_t$ across positions and sequences. Are they correlated? Do they occupy distinct ranges?

2. **Context sensitivity**: Compare gate values for high‑surprise vs. low‑surprise tokens, tokens requiring storage vs. retrieval.

3. **Layer‑wise patterns**: Does gate specialisation increase with depth?

4. **Causal intervention**: Manually set $\mathbf{b}_t = \mathbf{0}$ (disable erasing) or $\mathbf{w}_t = \mathbf{0}$ (disable writing) at selected steps. Observe effect on recall accuracy.

### 4.4 Implementation Plan

**Code structure**:
```
thesis/
├── model_wrappers/          # Extraction utilities for GDN-2, GDN, Mamba-2
├── probing_tasks/           # Synthetic dataset generators
├── experiments/             # Experiment runners
├── analysis/                # Statistics and visualization
├── results/                 # Output storage
└── scripts/                 # Batch execution
```

**Key dependencies**: PyTorch, Transformers, FLA (Flash Linear Attention) library, NumPy, Matplotlib, Seaborn, Pandas.

---

## 5. Experimental Design and Evaluation

### 5.1 Experiment Matrix

| Experiment | Models | Sequence Lengths | Task Variations | Measurements |
|------------|--------|------------------|-----------------|--------------|
| E1: Distance sensitivity | GDN-2, GDN, Mamba-2 | 128, 512, 2048, 8192 | 2–16 pairs | Accuracy @ distance |
| E2: Interference | GDN-2, GDN, Mamba-2 | 256, 1024 | 2–8 bindings | Accuracy vs. interference |
| E3: Overwrite resilience | GDN-2, GDN | 512 | Sequential writes | Decay curve |
| E4: Long‑range dependency | GDN-2, Mamba-2 | 1024–32k | 1 dependency | Accuracy vs. distance |
| E5: Gate analysis | GDN-2 | 512, 2048 | All tasks | Gate correlations, interventions |
| E6: Upper bound | Transformer (125M) | 256, 512 | All tasks | Accuracy ceiling |

### 5.2 Hypotheses

| Hypothesis | Prediction |
|------------|------------|
| **H1** (Retention advantage) | GDN‑2 maintains higher accuracy at long distances than GDN, due to independent erase/write. |
| **H2** (Interference reduction) | GDN‑2 suffers less from overwrite interference; earlier bindings remain accessible. |
| **H3** (Gate specialisation) | Erase gates activate primarily when new information conflicts with stored memory; write gates activate for new information regardless. |
| **H4** (Causal necessity) | Disabling erase gates causes memory to saturate; disabling write gates prevents new learning. |
| **H5** (Performance gap) | Full attention achieves near‑perfect recall on synthetic tasks; recurrent models trade memory for efficiency. |

### 5.3 Evaluation Metrics

| Metric | Definition | Application |
|--------|------------|-------------|
| **Exact‑match accuracy** | Proportion of correct predictions | Primary task metric |
| **Retention curve** | Accuracy as function of distance | Compare models |
| **Interference score** | Accuracy drop when intervening writes added | Quantify forgetting |
| **Gate correlation** | Pearson/Spearman between $\mathbf{b}_t$ and $\mathbf{w}_t$ | Test independence |
| **Intervention effect** | Δaccuracy after gate manipulation | Verify causality |
| **Statistical significance** | p‑values from paired t‑tests/t‑tests | Validate differences |

### 5.4 Statistical Protocol

- Minimum 100 trials per condition (reduced for longer sequences due to compute).
- Report means with 95% confidence intervals.
- Use paired t‑tests for within‑model comparisons, independent t‑tests for between‑model.
- Apply Bonferroni correction for multiple comparisons where appropriate.

---

## 6. Timeline (4‑Month Intensive)

| Week | Phase | Deliverable |
|------|-------|-------------|
| 1–2 | **Setup** | Clone repos, set up environment, extract gate utilities from GDN‑2, GDN, Mamba‑2. |
| 3–4 | **Task Implementation** | Implement Associative Recall, Multi‑Value Binding, and Long‑Range probing tasks. |
| 5–6 | **Pilot Experiments** | Run small‑scale tests (125M models), debug, adjust task parameters. |
| 7–9 | **Main Experiments** | Run full experiment matrix (E1–E4). |
| 10 | **Gate Analysis** | Extract and analyze gate values; perform interventions (E5). |
| 11 | **Upper Bound** | Train/run Transformer baselines (E6). |
| 12–13 | **Analysis** | Statistical testing, visualization, interpretation. |
| 14–16 | **Writing** | Draft thesis, refine analysis, prepare code for release. |

**Total effective person‑weeks**: 12–14 (excluding writing).

---

## 7. Expected Contributions and Risks

### Contributions

| Contribution Type | Description |
|-------------------|-------------|
| **Scientific** | First mechanistic analysis of decoupled erase‑write gates in linear attention. |
| **Empirical** | Quantitative comparison of memory retention and interference across GDN‑2, GDN, and Mamba‑2. |
| **Methodological** | Open‑source probing suite for evaluating recurrent memory models (reusable by community). |
| **Actionable** | Design insights: whether gates are redundant, or whether specific tasks benefit from decoupling. |
| **Publishable** | Suitable for *ICLR Workshop on Representational Alignment*, *BlackboxNLP*, or *NeurIPS Workshop on Efficient LLMs*. |

### Risk Mitigation

| Risk | Probability | Mitigation |
|------|-------------|-------------|
| Gates/hidden states not exposed in official code | Medium | Modify model class to return them (small code change). Fallback: re‑implement core cell in PyTorch. |
| Probing tasks too simple or too noisy | Low | Pilot on small models first; adjust sequence length, number of pairs, and noise level iteratively. |
| Results show no difference from GDN | Medium | Still valid—suggests decoupling is not the cause. Investigate alternative explanations. |
| Computational resources limited | Medium | Use smaller variants (350M/700M) instead of 1.3B. The trends are likely consistent across scales. |
| Fine‑tuning required | Low | Not required; only forward passes needed. |

---

## 8. Conclusion

This thesis proposes a rigorous, focused, and feasible investigation into the memory dynamics of Gated DeltaNet‑2. Rather than merely re‑reporting benchmark scores, it opens the black box and asks *how* decoupled erase and write gates improve memory management. The work is:

- **Original**: No existing study has mechanistically analyzed gate dynamics in linear attention models.
- **Feasible**: Only forward passes required; synthetic tasks are simple to implement; compute requirements are moderate.
- **Rigorous**: Systematic experimental design with multiple tasks, baselines, and statistical validation.
- **Reproducible**: All code, data, and models will be open‑sourced.
- **Impactful**: Results will inform future linear attention architecture design and contribute to the growing field of mechanistic interpretability for efficient sequence models.

The proposed timeline is aggressive but achievable with focused effort. The thesis will produce a self‑contained, publishable contribution that advances our understanding of efficient language models.

---

## 9. Bibliography

1. Y. Sun et al., “Parallelizing Linear Transformers with the Delta Rule over Sequence Length,” arXiv:2406.06484, 2024.

2. S. Yang et al., “Gated Delta Networks: Improving Mamba2 with Delta Rule,” ICLR 2025.

3. A. Hatamizadeh, Y. Choi, J. Kautz, “Gated DeltaNet-2: Decoupling Erase and Write in Linear Attention,” arXiv:2605.22791, May 2026.

4. “Kimi Linear: An Expressive, Efficient Attention Architecture,” arXiv:2510.26692, 2025.

5. “FG²-GDN: Enhancing Long-Context Gated Delta Networks with Doubly Fine-Grained Control,” arXiv:2604.14497, 2026.

6. “Mechanistic evaluation of Transformers and state space models,” arXiv:2601.24312, 2026.

7. “Preconditioned DeltaNet: Curvature-aware Sequence Modeling for Linear Recurrences,” arXiv:2604.17327, 2026.

8. “MDN: Parallelizing Stepwise Momentum for Delta Linear Attention,” arXiv:2605.04547, 2026.

9. “What Matters in Linearizing Language Models? A Comparative Study of Architecture, Scale, and Task Adaptation,” arXiv preprint, 2025.

10. Gated DeltaNet-2 official GitHub repository: NVlabs/GatedDeltaNet-2.