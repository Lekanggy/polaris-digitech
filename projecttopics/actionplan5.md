## Is "Attention-Free Drafting" Feasible for a Low-Resources MSc Thesis?

**Yes, but with major caveats.** The original claim of "high feasibility" in the proposed direction needs a serious reality check when you're working with a limited budget. Here's what you're actually up against:

**What makes it genuinely feasible (The Upside)**:
- **Minimal training, not zero training.** Draft heads in EAGLE-3 are tiny (2–5% of target model size). You're not training a full LLM from scratch.
- **Well-worn problem domain.** The question "is attention necessary in draft models?" is a legitimate, unanswered research question—exactly what a good MSc thesis should ask.
- **Incremental experimental design.** You can start small (tiny models, simple architectures) and scale up only if initial results are promising—perfect for resource-limited research.
- **No need for massive datasets.** Draft models learn to mimic the target model's distribution, not to memorize world knowledge. Training data requirements are modest.

**What makes it potentially infeasible (The Reality)**:
- **Training still requires GPUs.** The original EAGLE codebase assumes 8× RTX 3090s (roughly 192GB VRAM) for training. That is emphatically not low-resource friendly.
- **Attention-free drafting may simply not work.** There's a reason every major speculative decoding method uses attention—it might be table stakes. Your thesis could become a negative result, which is risky for an MSc (some committees love them, others reject them outright).
- **Open questions need empirical grounding.** Does "attention-free" mean no cross-attention? Self-attention? Any attention mechanism at all? The answer determines whether your draft model is 2MB or 2GB.
- **Low resources + novel architecture = debugging nightmare.** If something breaks, is it your architecture, your training setup, or a bug in the codebase? Without abundant compute for ablations, you may never know.

**Bottom line:** Feasible *if* you severely constrain the scope and use existing infrastructure wisely. Not feasible if you try to match EAGLE's original training regime or target 70B+ parameter models.

---

## The Best Way to Go About It: A Practical, Low-Resource Blueprint

Here's a step-by-step plan that keeps compute costs under control while producing defensible thesis contributions.

### Step 1: Define a Sharp, Measurable Research Question

Instead of the vague "Can we design attention-free draft models?", ask something specific:

> **"How does replacing cross-attention with a purely feedforward projection affect draft model acceptance length, throughput, and output distribution fidelity across increasing target model sizes (1B–7B parameters)?"**

This is measurable, bounded, and falsifiable. It also hedges your bets: even if feedforward drafters perform terribly, you still have a result ("Feedforward drafters underperform attention-based drafters by X% due to Y factors").

### Step 2: Choose Your Model Ecosystem Wisely

| Constraint | Recommendation | Why |
|------------|----------------|------|
| Target model size | ≤ 7B (Llama-2-7B, Qwen2-7B, Phi-3-mini) | Fits in ≤ 24GB VRAM for inference |
| Draft model scale | 20M–100M parameters | Lightweight enough to train on 1–2 consumer GPUs |
| Hardware | Single RTX 4090 (24GB) or two RTX 3060s (12GB each) | 
| Alternative hardware | Free-tier Colab (T4, 16GB) + occasional paid upgrades | Reduce costs further |

**Pro tip:** Start with TinyLlama-1.1B as the target model for initial prototyping. It fits entirely in 16GB VRAM and trains fast. Only after your feedforward drafter works on TinyLlama should you scale up.

### Step 3: Pick Your Baseline and Architecture

**Use Medusa as your foundation, not EAGLE.** Here's why: Medusa trains multiple decoding heads on the *same* model, not a separate draft model. This means:
- No need to train a separate draft model from scratch
- Training only adds ~5% parameter overhead
- The codebase is simpler and runs on commodity hardware (many Medusa implementations run on a single GPU)

**Architecture design for the feedforward drafter:**
- Input: The target model's hidden states at a single layer (choose layer L/2 or L/4)
- Core: A 2–4 layer MLP with residual connections (no attention whatsover)
- Output: A softmax over vocabulary (or token IDs for greedy decoding)

```
Target Model Hidden State (d_model)
    ↓
[Linear] → [ReLU] → [LayerNorm]
    ↓
[Linear] → [ReLU] → [LayerNorm] 
    ↓
[Linear] → [Softmax]
    ↓
Predicted token distribution
```

This architecture is: (a) trivial to implement, (b) cheap to train, and (c) entirely attention-free. If it works, great. If not, you've still answered the research question.

### Step 4: Use Existing Codebases (Don't Write From Scratch)

| Resource | How to Use | Time Saved |
|----------|------------|------------|
| [Medusa GitHub](https://github.com/FasterDecoding/Medusa) | Fork and replace the attention-based heads with feedforward MLPs | ~2 weeks |
| [vLLM speculative decoding docs](https://docs.vllm.ai) | Use for inference benchmarking | ~1 week |
| [Hugging Face Transformers](https://huggingface.co/docs/transformers/index) | For model loading and hidden state extraction | Already familiar |

**Critical: Do not attempt to reimplement EAGLE from scratch.** You will waste months debugging attention drift in your own implementation before even reaching the actual research question.

### Step 5: A Realistic Experimental Pipeline

**Phase 1: Sanity Check (Weeks 1–2)**
- Implement the feedforward drafter in Medusa
- Verify it runs and produces *some* token predictions
- **Compute cost:** ~10 GPU-hours on Colab (free)
- **Success criterion:** The drafter outputs tokens (even if wrong)

**Phase 2: Initial Comparison (Weeks 3–5)**
- Train feedforward drafter on TinyLlama-1.1B target (small dataset, 100K tokens)
- Train Medusa's attention-based heads on the same data
- Compare acceptance length across 5 speculation depths (2, 4, 6, 8, 10)
- **Compute cost:** ~50 GPU-hours (≈$25 on Colab Pro+)

**Phase 3: Scaling Study (Weeks 6–10)**
- Repeat Phase 2 on target models of increasing size: 1B → 3B → 7B
- For 7B models, use LoRA-style parameter-efficient training for the drafter
- Measure throughput (tokens/sec), acceptance length, and distribution similarity (KL divergence between draft and target predictions)
- **Compute cost:** ~200 GPU-hours (≈$100–$150 if using spot instances)

**Phase 4: Failure Analysis (Weeks 11–14)**
- Systematically characterize *when* feedforward drafting fails
- Is failure correlated with sequence length? Vocabulary size? Target model architecture?
- Propose modifications to address the most severe failure modes
- **Compute cost:** ~100 GPU-hours (≈$50)

**Total estimated compute budget:** 360 GPU-hours, ≈$200–$250. This is realistic for a single MSc student with a credit card and careful planning.

### Step 6: A Cheaper Alternative Path (If Even $200 Is Too Much)

If you truly have zero budget beyond a laptop, consider pivoting to **theoretical analysis** rather than empirical scaling:

**Research question:** "What are the theoretical lower bounds on draft model complexity for faithful speculation, and can feedforward models meet them?"

**Methodology:**
- Derive information-theoretic bounds linking draft model capacity to acceptance length
- Prove (or disprove) the necessity of attention for achieving these bounds
- Validate with tiny synthetic experiments on a CPU (GPT-2 small, 124M parameters)

**Cost:** $0 (just time). **Output:** A theoretical paper that doesn't require GPUs. This is unconventional but defensible if your advisor agrees.

---

## The Make-or-Break Question

**Before you commit, run this small test (2 hours, $0):**

1. Load a 7B model on a free Colab T4 GPU
2. Extract the hidden states from its middle layer for a single batch of 100 prompts
3. Train a tiny 4-layer MLP (10M parameters) to predict the next token from those hidden states
4. Measure how often the MLP's top-1 prediction matches the target model's actual next token

If accuracy is <30%, abandon the feedforward approach entirely and pivot. If accuracy is >50%, proceed with the full plan. This 2-hour test will save you months of wasted effort.

---

## Final Verdict: Go Ahead, But With Eyes Wide Open

**Yes, proceed** *if* you follow the constrained, incremental plan above. The research question is legitimate, the methodology is sound, and the compute budget is manageable.

**Do not proceed** if you plan to:
- Train draft models for 70B+ parameter targets
- Reimplement EAGLE from scratch
- Run without a cheap pre-screening test
- Ignore the possibility of negative results

Your thesis will succeed or fail on the **clarity of your research question** and the **rigor of your failure analysis**, not on whether feedforward drafters beat EAGLE. Frame it as an investigation into the necessity of attention, not as a "better than EAGLE" claim, and you'll have a defensible, interesting MSc thesis even if every experiment fails.