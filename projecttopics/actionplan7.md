## Thesis Proposal (2‑Page Draft) – 5‑Month MSc Project (Vision‑Focused)

**Title:**  
*Block‑Wise Training for Vision Transformers: A Comparative Analysis of Memory‑Efficient Methods under Constrained Timelines*

**Student:** [Your Name]  
**Supervisor:** [Name]  
**Duration:** 5 months  
**Proposed Start:** [Date]

---

### 1. Introduction & Motivation

Training large Vision Transformers (ViTs) is memory‑intensive because end‑to‑end backpropagation stores activations for all layers. As models grow deeper, this limits batch size and model size, especially on single GPU setups. Recent proposals like **DiffusionBlocks** (ICLR 2026), **LocoProp** (AISTATS 2022), and **Target Propagation** claim to reduce memory by training networks block‑by‑block. However, no independent, controlled comparison exists for ViTs on standard benchmarks. This thesis provides a systematic evaluation of these methods, focusing on trade‑offs between memory, accuracy, and training speed – delivering actionable guidance for practitioners with limited compute.

---

### 2. Research Questions (Scaled for 5 Months)

Given the 5‑month constraint, we focus on **two representative methods** (LocoProp and DiffusionBlocks) plus two baselines (end‑to‑end and activation checkpointing). Target Propagation is excluded due to high implementation complexity and uncertain scalability.

| RQ | Question | Primary Metric |
|----|----------|----------------|
| **RQ1** | How much peak GPU memory does each method save when training ViT‑Small on CIFAR‑100? | Peak memory (GB) |
| **RQ2** | What is the final top‑1 accuracy after a fixed training budget (50 epochs)? | Accuracy (%) |
| **RQ3** | What is the training throughput (images/second) for each method? | Throughput |
| **RQ4** | How sensitive are LocoProp and DiffusionBlocks to the number of blocks (2, 4, 6)? | Memory & accuracy vs. block count |

---

### 3. Methodology & Implementation Plan (5 Months)

We use **ViT‑Small** (22M parameters) as the primary architecture and **CIFAR‑100** as the dataset – small enough for rapid iteration but representative of vision tasks. All experiments run on a single GPU (e.g., NVIDIA RTX 3090/4090 or A10).

| Phase | Duration | Activities | Deliverable |
|-------|----------|------------|--------------|
| **1. Baselines** | Weeks 1–3 | Implement end‑to‑end backprop (Adam) and activation checkpointing (`torch.utils.checkpoint`). Validate on ViT‑Small/CIFAR‑100. | Working training harness + baseline metrics. |
| **2. LocoProp Integration** | Weeks 4–7 | Adapt `locoprop` library to ViT (restructure into `nn.Sequential` blocks). Tune local loss hyperparameters. | Working LocoProp training + initial results. |
| **3. DiffusionBlocks Integration** | Weeks 8–12 | Use official DiffusionBlocks repository; adapt to ViT‑Small/CIFAR‑100. Experiment with different block partitions (2/4/6 blocks). | Working DiffusionBlocks training + block sensitivity data. |
| **4. Main Experiments & Analysis** | Weeks 13–16 | Run full 4×4 matrix (4 methods × 4 RQs) – 16 runs, each ~12 hours on CIFAR‑100. Collect memory, accuracy, throughput. | Complete result tables and figures. |
| **5. Writing & Finalisation** | Weeks 17–20 | Interpret results, write thesis, prepare code repository. | Thesis manuscript + public code. |

**Total:** 20 weeks (5 months with 1‑week slack).

---

### 4. Expected Outcomes & Contribution

| Outcome | Type | Expected Significance |
|---------|------|------------------------|
| **Head‑to‑head comparison** of LocoProp and DiffusionBlocks against standard baselines for ViT. | Empirical | First such comparison for ViT; fills a gap in the literature. |
| **Block count sensitivity analysis** for both methods – a missing guideline in the original DiffusionBlocks paper. | Novel insight | Directly useful for practitioners choosing block granularity. |
| **Open‑source benchmarking code** for ViT‑Small/CIFAR‑100 with plug‑in support for LocoProp and DiffusionBlocks. | Reproducibility | Enables future extension to larger models/datasets. |

Even if one method underperforms (e.g., slower convergence), the analysis of *why* (e.g., local loss mismatch, noise overhead) constitutes a valid scientific contribution.

---

### 5. Risk Mitigation (5‑Month Specific)

| Risk | Probability | Mitigation |
|------|-------------|-------------|
| **DiffusionBlocks code is brittle or not compatible with ViT‑Small** | Medium | Start integration early (week 8). Fallback: use ViT‑Tiny (5M params) on CIFAR‑10 to debug faster. |
| **LocoProp adaptation to ViT fails** | Low | LocoProp is robust; the `nn.Sequential` restructuring is well documented. |
| **Experiments take longer than expected** | Medium | Reduce RQ4 to only two block counts (2 and 6). Use mixed precision (FP16) to speed up training. |
| **Single GPU memory insufficient for some methods** | Low | ViT‑Small + CIFAR‑100 fits easily. Use batch size = 128; reduce to 64 if needed. |

---

### 6. Feasibility Statement

The proposed work is **feasible within 5 months** because:

- The chosen architecture (ViT‑Small) and dataset (CIFAR‑100) allow fast iteration (12‑24 hours per method run).
- Two novel methods (LocoProp, DiffusionBlocks) instead of four reduces integration complexity by ~40%.
- All required code foundations exist (official repositories for LocoProp and DiffusionBlocks, PyTorch baselines).
- The student has prior experience with PyTorch and transformer models (assumed; if not, add 2 weeks for ramp‑up).

---

### 7. Recommended Reading (Start Immediately)

1. LocoProp: *”LocoProp: Enhancing BackProp via Local Loss Optimization”* – AISTATS 2022.
2. DiffusionBlocks: ICLR 2026 paper (full text, not summary).
3. ViT: *”An Image is Worth 16x16 Words”* – ICLR 2021.
4. Activation Checkpointing: PyTorch documentation on `torch.utils.checkpoint`.

---

### 8. Conclusion

This thesis delivers a **practical, timely, and reproducible** comparison of memory‑efficient block‑wise training methods for vision transformers. Within 5 months, the work will produce clear guidelines on which method to use under memory constraints – a valuable resource for researchers and engineers.

---

**Request for Supervisor Feedback:**  
Is the exclusion of Target Propagation acceptable given the timeline? Should we prioritise DiffusionBlocks over LocoProp (or vice versa) for deeper analysis?