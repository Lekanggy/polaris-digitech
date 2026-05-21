## Action Plan for Option 1 Research (TST Empirical Simulation on Small Scale)

### Duration: 4–5 Months (Target: 20 weeks)
### Resource: Standard laptop (CPU) + free Google Colab (CPU/TPU)
### Goal: Produce an MSc thesis chapter + working code + experimental results comparing TST vs. baseline on tiny character‑level language modeling.

---

## 📅 Phase 1: Foundation & Setup (Weeks 1–3)

### Week 1 – Literature & Understanding
- Read the original TST paper (arXiv:2605.06546) thoroughly.
- Identify key hyperparameters: bag size `s`, superposition fraction `r`, switching criterion.
- Understand the MCE loss formulation.
- **Deliverable**: A 1‑page summary of TST’s mechanics and open questions.

### Week 2 – Environment & Code Base
- Set up Python environment on your laptop (or Colab).
- Install PyTorch (CPU version), `datasets`, `tiktoken`, `numpy`, `matplotlib`.
- Clone `nanoGPT` (or write a minimal GPT from scratch – recommended for learning).
- Verify that a tiny model (2M params) trains on `TinyShakespeare` for 500 steps.
- **Deliverable**: Working baseline training script (standard cross‑entropy).

### Week 3 – Implement TST in Code
- Extend the model’s `forward` to accept `bag_size` and `use_superposition` flags.
- Implement `masked_cross_entropy` that computes loss over a bag of future tokens.
- Add a simple training loop that switches from superposition to recovery after a fixed number of steps.
- Test with `bag_size=2,4,8` on a tiny slice of data (100 batches) to ensure no bugs.
- **Deliverable**: Working TST training script (two phases, switchable).

---

## 🧪 Phase 2: Pilot Experiments & Hyperparameter Selection (Weeks 4–6)

### Week 4 – Baseline Calibration
- Train baseline (bag_size=1, no superposition) on full TinyShakespeare (split 90/10) for a fixed step budget, e.g., 3000 steps.
- Record loss curve, validation perplexity, training time.
- Repeat 3 times with different seeds to estimate variance.
- **Deliverable**: Baseline performance statistics (mean ± std).

### Week 5 – Sweep Superposition Fraction
- Fix bag_size=4. Vary superposition fraction: 10%, 25%, 40%, 60% of total steps (total steps fixed to 3000).
- For each fraction, run 2 seeds (due to time).
- Observe validation loss at the end and any loss spike during transition.
- **Deliverable**: Plot of final validation loss vs. superposition fraction.

### Week 6 – Sweep Bag Size
- Fix superposition fraction at 40% (best from Week 5).
- Vary bag_size = 2, 4, 8, 16 (if memory permits).
- Run 2 seeds each.
- Record training time per step (actual wall‑clock) and final loss.
- **Deliverable**: Table showing trade‑off (time vs. loss) for each bag size.

---

## 📊 Phase 3: Main Experiments & Data Collection (Weeks 7–11)

### Week 7 – Full Experiment Design
- Based on pilot results, select 3–4 promising configurations (e.g., bag=2,4,8 with optimal fraction) plus baseline.
- Set total steps to 5000 (enough to see convergence).
- Decide on number of seeds: at least 3 per configuration (for statistical significance).
- Write a batch script to run experiments sequentially (overnight on CPU).
- **Deliverable**: Experiment design document (configurations, metrics, stopping criteria).

### Week 8 – Run Baseline & Bag=2 (3 seeds each)
- Run experiments. Each run may take several hours on CPU (5000 steps × batch size 32). Use overnight runs.
- Record loss curves (every 100 steps) and validation losses (every 500 steps).
- Save final models (optional, but good for analysis).
- **Deliverable**: Raw log files for baseline and bag=2.

### Week 9 – Run Bag=4 & Bag=8 (3 seeds each)
- Same procedure as Week 8.
- Monitor for any instability (loss spikes > 2× baseline loss). Note them.
- **Deliverable**: Raw logs for bag=4 and bag=8.

### Week 10 – Additional Runs (if time)
- Explore one “best” configuration with longer training (10,000 steps) to see if gap closes.
- Or run bag=1 with 10,000 steps as a stronger baseline.
- **Deliverable**: Extended run logs.

### Week 11 – Data Processing & Preliminary Plots
- Aggregate all logs into a pandas DataFrame.
- Compute:
  - Average training time per 1000 steps per configuration.
  - Final validation loss (average over seeds).
  - Loss at transition point (if any).
- Plot learning curves (loss vs. steps) for each configuration, with shaded std.
- Plot a Pareto chart: training time vs. final loss.
- **Deliverable**: Set of preliminary figures (ready for thesis).

---

## ✍️ Phase 4: Analysis & Writing (Weeks 12–16)

### Week 12 – Interpret Results
- Answer key research questions:
  - Does TST reduce training time for a given loss target?
  - Which bag size gives the best trade‑off?
  - Is there a loss spike after switching? How big?
- Formulate explanations (e.g., larger bag = faster but noisier early learning).
- **Deliverable**: Bullet‑point analysis.

### Week 13 – Write Methodology Chapter
- Describe model architecture, dataset, TST implementation details.
- Include hyperparameter choices, hardware (CPU/Colab), and evaluation protocol.
- **Deliverable**: Draft of Chapter 3 (Methodology).

### Week 14 – Write Results Chapter
- Present tables, figures, and statistical tests (e.g., paired t‑tests between baseline and best TST).
- Include raw numbers (mean loss ± std, mean time).
- **Deliverable**: Draft of Chapter 4 (Results).

### Week 15 – Write Discussion & Conclusion
- Interpret what the results mean for small‑scale training.
- Discuss limitations: small dataset, character‑level only, CPU training.
- Suggest future work (e.g., test on low‑resource languages, variable bag size).
- **Deliverable**: Draft of Chapter 5 (Discussion) + Chapter 6 (Conclusion).

### Week 16 – Revise & Integrate
- Combine all chapters into a coherent thesis draft.
- Ensure introduction states the problem clearly and related work is cited.
- Add references (BibTeX).
- **Deliverable**: Complete thesis draft (ready for supervisor review).

---

## 🔁 Phase 5: Revision & Submission (Weeks 17–20)

### Week 17 – Supervisor Feedback
- Send draft to supervisor.
- Incorporate comments, add missing experiments, clarify writing.
- **Deliverable**: Revised draft.

### Week 18 – Final Experiments (if requested)
- Run any additional small experiments (e.g., different random seeds, alternative switching criterion).
- Update figures accordingly.
- **Deliverable**: Final results.

### Week 19 – Formatting & Proofreading
- Format thesis according to university guidelines.
- Proofread for grammar, consistency, and clarity.
- Ensure all code is documented and can be shared (GitHub repository).
- **Deliverable**: Final thesis PDF + code repository.

### Week 20 – Submission & Defense Preparation
- Submit thesis.
- Prepare a 15‑minute presentation summarizing problem, method, results, and conclusions.
- Practice answering likely questions (e.g., “Why did you use character‑level?”, “Could TST work on subwords?”).
- **Deliverable**: Thesis submitted + presentation slides.

---

## 🛠️ Tools & Resources Checklist

| Category | Item | Notes |
|----------|------|-------|
| **Coding** | Python 3.9+, PyTorch (CPU), numpy, matplotlib, pandas | Free |
| **Data** | `tiny_shakespeare` from Hugging Face or direct download | ~4 MB |
| **Version control** | GitHub (private or public) | Free for students |
| **Writing** | LaTeX (Overleaf or local) or Word | Use university template |
| **Time tracking** | Simple spreadsheet or Toggl | To stay on schedule |
| **Backup** | Google Drive / USB drive | Daily backups of code and logs |

---

## ⚠️ Risk Mitigation

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|-------------|
| Code bug delays experiment start | Medium | High | Start implementation early (Week 2), test incrementally |
| Runs take longer than expected on CPU | High | Medium | Reduce total steps to 3000 if needed, use Colab free T4 occasionally |
| Loss spike causes model divergence | Medium | Medium | Use gradient clipping (norm=1.0) and lower learning rate for TST runs |
| Hard disk failure | Low | High | Commit code daily to GitHub, backup logs to cloud |
| Supervisor unresponsive | Low | Medium | Send progress reports every 2 weeks, have a backup advisor |
| Results inconclusive (no clear benefit) | Medium | Low | Frame as “negative result” – still a contribution; discuss why |

---

## 📈 Success Criteria

At the end of 4–5 months, you will have:
- A **reproducible codebase** implementing TST and baseline.
- **Quantitative results** (loss curves, time, final perplexity) for at least 4 configurations.
- **At least one clear finding** (e.g., “bag size 4 with 40% superposition steps reduces training time by 15% with no statistically significant loss increase”).
- A **full thesis draft** (40–60 pages) that follows standard structure.
- **Defense‑ready presentation**.

This plan is realistic for a dedicated student with no hardware budget. Start today by setting up your environment and running the baseline script.

Would you like me to provide the exact Python code for the baseline + TST implementation that you can copy and run immediately?



Perfect. Let's implement a minimal but complete Token Superposition Training (TST) system from scratch, designed to run on a standard laptop CPU or free Google Colab. We'll use `nanoGPT` as our base because it's minimal, educational, and easy to modify.

---

## 🧱 Overview of Our Implementation

We will:
1.  Take a tiny GPT-like model (2–4 million parameters).
2.  Train on character‑level Shakespeare text.
3.  Implement two training phases:
    - **Superposition Phase**: Tokens grouped into bags of size `s`. Loss is Masked Cross‑Entropy (MCE) over all tokens in the bag.
    - **Recovery Phase**: Standard next‑token prediction (causal LM loss).
4.  Compare against a baseline (standard training) and TST with different bag sizes.

All code will be self‑contained, using only PyTorch and standard libraries.

---

## 📁 Step 1: Setup Environment

Create a new Python file `tst_shakespeare.py`. Install required packages (if not already present):

```bash
pip install torch tiktoken numpy datasets
```

---

## 📜 Step 2: Load and Prepare Data

We'll use the `TinyShakespeare` dataset (character‑level, ~40k unique characters? Actually it's characters, so vocab size ~65). Or use the `datasets` library version.

```python
import torch
import torch.nn as nn
import torch.nn.functional as F
import numpy as np
import tiktoken
from datasets import load_dataset
from torch.utils.data import DataLoader, Dataset

# -------------------------------
# 1. Load TinyShakespeare (character level)
# -------------------------------
def load_shakespeare():
    with open("input.txt", "w") as f:
        # Download if not present
        pass
    # Actually easier: use datasets
    dataset = load_dataset("tiny_shakespeare", split="train")
    text = "\n\n".join(dataset["text"])   # full concatenated text
    # Build character vocab
    chars = sorted(list(set(text)))
    vocab_size = len(chars)
    stoi = {ch: i for i, ch in enumerate(chars)}
    itos = {i: ch for i, ch in enumerate(chars)}
    encode = lambda s: [stoi[c] for c in s]
    decode = lambda l: ''.join([itos[i] for i in l])
    return text, encode, decode, vocab_size

text, encode, decode, vocab_size = load_shakespeare()
data = torch.tensor(encode(text), dtype=torch.long)
print(f"Total characters: {len(data)}, vocab size: {vocab_size}")
```

But for simplicity, we can also use a pre‑tokenized version. However, character‑level is easier to debug.

---

## 🤖 Step 3: Define a Tiny GPT Model

We'll copy the `nanoGPT` model architecture but shrink it dramatically.

```python
class CausalSelfAttention(nn.Module):
    def __init__(self, config):
        super().__init__()
        assert config.n_embd % config.n_head == 0
        self.c_attn = nn.Linear(config.n_embd, 3 * config.n_embd)
        self.c_proj = nn.Linear(config.n_embd, config.n_embd)
        self.n_head = config.n_head
        self.n_embd = config.n_embd
        self.register_buffer("bias", torch.tril(torch.ones(config.block_size, config.block_size))
                                     .view(1, 1, config.block_size, config.block_size))

    def forward(self, x):
        B, T, C = x.size()
        qkv = self.c_attn(x)
        q, k, v = qkv.split(self.n_embd, dim=2)
        q = q.view(B, T, self.n_head, C // self.n_head).transpose(1, 2)
        k = k.view(B, T, self.n_head, C // self.n_head).transpose(1, 2)
        v = v.view(B, T, self.n_head, C // self.n_head).transpose(1, 2)
        att = (q @ k.transpose(-2, -1)) * (1.0 / math.sqrt(k.size(-1)))
        att = att.masked_fill(self.bias[:,:,:T,:T] == 0, float('-inf'))
        att = F.softmax(att, dim=-1)
        y = att @ v
        y = y.transpose(1, 2).contiguous().view(B, T, C)
        y = self.c_proj(y)
        return y

class MLP(nn.Module):
    def __init__(self, config):
        super().__init__()
        self.c_fc = nn.Linear(config.n_embd, 4 * config.n_embd)
        self.c_proj = nn.Linear(4 * config.n_embd, config.n_embd)
        self.gelu = nn.GELU()

    def forward(self, x):
        return self.c_proj(self.gelu(self.c_fc(x)))

class Block(nn.Module):
    def __init__(self, config):
        super().__init__()
        self.ln1 = nn.LayerNorm(config.n_embd)
        self.attn = CausalSelfAttention(config)
        self.ln2 = nn.LayerNorm(config.n_embd)
        self.mlp = MLP(config)

    def forward(self, x):
        x = x + self.attn(self.ln1(x))
        x = x + self.mlp(self.ln2(x))
        return x

class GPT(nn.Module):
    def __init__(self, config):
        super().__init__()
        self.config = config
        self.token_embedding = nn.Embedding(config.vocab_size, config.n_embd)
        self.position_embedding = nn.Embedding(config.block_size, config.n_embd)
        self.blocks = nn.Sequential(*[Block(config) for _ in range(config.n_layer)])
        self.ln_f = nn.LayerNorm(config.n_embd)
        self.lm_head = nn.Linear(config.n_embd, config.vocab_size, bias=False)

    def forward(self, idx, targets=None, bag_size=1, use_superposition=False):
        B, T = idx.shape
        assert T <= self.config.block_size
        pos = torch.arange(0, T, device=idx.device).unsqueeze(0)
        x = self.token_embedding(idx) + self.position_embedding(pos)
        x = self.blocks(x)
        x = self.ln_f(x)
        logits = self.lm_head(x)   # (B, T, vocab_size)

        loss = None
        if targets is not None:
            if use_superposition and bag_size > 1:
                loss = masked_cross_entropy(logits, targets, bag_size)
            else:
                loss = F.cross_entropy(logits.view(-1, logits.size(-1)), targets.view(-1))
        return logits, loss

def masked_cross_entropy(logits, targets, bag_size):
    """
    logits: (B, T, V)
    targets: (B, T)
    For each position i, the target is a bag of tokens: [targets[i], targets[i+1], ... targets[i+bag_size-1]]
    But we cannot look ahead beyond sequence length.
    Simplified: for each t, consider tokens from t to min(t+bag_size-1, T-1) as correct.
    Loss = average over all tokens in the bag.
    """
    B, T, V = logits.shape
    loss_total = 0.0
    count = 0
    for t in range(T):
        bag_end = min(t + bag_size, T)
        # targets for this bag: indices t .. bag_end-1
        for offset in range(bag_end - t):
            target_tok = targets[:, t + offset]   # (B,)
            logit_t = logits[:, t, :]             # (B, V)
            loss_total += F.cross_entropy(logit_t, target_tok, reduction='sum')
            count += B
    return loss_total / count
```

But note: The above MCE is simplistic. In the original TST, the bag is formed by grouping tokens before feeding into the model, not by spreading the same logit across multiple future tokens. A more faithful implementation would modify the input sequence: group tokens into bags, then the model sees a bag embedding (e.g., average of token embeddings) and predicts all tokens in the bag. However, that changes sequence length. For a quick simulation, we can keep the sequence length fixed and compute the loss as above – it's a "weak" multi‑label loss. This is acceptable for a feasibility study.

We'll proceed with the above because it's simple and still captures the essence: the model is penalized for not predicting any of the tokens in the bag.

---

## 🚂 Step 4: Training Loop with Two Phases

We'll create a training function that:
- Takes `bag_size` (1 = standard training)
- Takes `superposition_steps` (number of steps to use MCE loss)
- After that, switches to standard cross‑entropy.

```python
def train(model, train_loader, val_loader, config, bag_size, superposition_steps, device='cpu'):
    optimizer = torch.optim.AdamW(model.parameters(), lr=config.lr)
    model.to(device)
    step = 0
    train_losses = []
    val_losses = []

    for epoch in range(config.num_epochs):
        model.train()
        for x, y in train_loader:
            x, y = x.to(device), y.to(device)
            use_superposition = (step < superposition_steps) and (bag_size > 1)
            logits, loss = model(x, targets=y, bag_size=bag_size, use_superposition=use_superposition)
            optimizer.zero_grad()
            loss.backward()
            optimizer.step()

            train_losses.append(loss.item())
            if step % config.log_interval == 0:
                print(f"Step {step}, loss: {loss.item():.4f}, phase: {'superposition' if use_superposition else 'recovery'}")

            step += 1

            # Validation
            if step % config.eval_interval == 0:
                model.eval()
                val_loss = 0.0
                with torch.no_grad():
                    for x_val, y_val in val_loader:
                        x_val, y_val = x_val.to(device), y_val.to(device)
                        _, loss_val = model(x_val, targets=y_val, bag_size=1, use_superposition=False)
                        val_loss += loss_val.item()
                val_loss /= len(val_loader)
                val_losses.append(val_loss)
                print(f"Validation loss: {val_loss:.4f}")
                model.train()

    return train_losses, val_losses
```

---

## 🔁 Step 5: Data Preparation for Sequences

We need to split the text into sequences of length `block_size`. We'll create a simple sliding window dataset.

```python
class CharSequenceDataset(Dataset):
    def __init__(self, data, block_size):
        self.data = data
        self.block_size = block_size

    def __len__(self):
        return len(self.data) - self.block_size

    def __getitem__(self, idx):
        x = self.data[idx:idx+self.block_size]
        y = self.data[idx+1:idx+self.block_size+1]
        return x, y

block_size = 128   # small, good for CPU
train_data = data[:int(0.9*len(data))]
val_data = data[int(0.9*len(data)):]

train_dataset = CharSequenceDataset(train_data, block_size)
val_dataset = CharSequenceDataset(val_data, block_size)
batch_size = 32
train_loader = DataLoader(train_dataset, batch_size=batch_size, shuffle=True)
val_loader = DataLoader(val_dataset, batch_size=batch_size)
```

---

## 🧪 Step 6: Run Experiments

Now we can run baseline (bag_size=1) and TST with bag sizes 2,4,8. We'll keep `superposition_steps` as, say, 40% of total steps. Total steps = `num_epochs * len(train_loader)`. Let's set a small total steps ~2000 for quick testing.

```python
config = SimpleNamespace(
    vocab_size=vocab_size,
    n_embd=128,
    n_head=4,
    n_layer=4,
    block_size=block_size,
    num_epochs=2,
    lr=1e-3,
    log_interval=100,
    eval_interval=200,
)

model_baseline = GPT(config)
# Train baseline
train_losses_b1, val_losses_b1 = train(model_baseline, train_loader, val_loader, config,
                                       bag_size=1, superposition_steps=0, device='cpu')
```

But careful: Our `train` function doesn't yet handle the variable step counting correctly. Let's rewrite a simplified main that does everything manually. I'll provide a complete, runnable script in the next answer.

Given the length, I'll now present the **complete single-file script** that you can copy, paste, and run on your laptop or free Colab. It will train a small GPT on Shakespeare and compare TST vs baseline.

---

## 🧾 Complete Script (tst_shakespeare.py)

I'll write a clean, self-contained version with comments. (This is a simulation – not a perfect reproduction of the original TST paper, but captures the core idea.)

```python
"""
Minimal Token Superposition Training (TST) Simulation on TinyShakespeare.
Runs on CPU/Colab free tier. Compares baseline vs. TST with bag sizes 2,4,8.
"""

import torch
import torch.nn as nn
import torch.nn.functional as F
from torch.utils.data import DataLoader, Dataset
from datasets import load_dataset
import math
import time
from types import SimpleNamespace

# ----------------------------
# 1. Data loading (character level)
# ----------------------------
def load_shakespeare():
    dataset = load_dataset("tiny_shakespeare", split="train")
    text = "\n\n".join(dataset["text"][:1000])  # Use first 1000 examples for speed
    chars = sorted(list(set(text)))
    vocab_size = len(chars)
    stoi = {ch: i for i, ch in enumerate(chars)}
    itos = {i: ch for i, ch in enumerate(chars)}
    encode = lambda s: [stoi[c] for c in s]
    decode = lambda l: ''.join([itos[i] for i in l])
    data = torch.tensor(encode(text), dtype=torch.long)
    return data, vocab_size, decode

data, vocab_size, decode = load_shakespeare()
print(f"Data length: {len(data)}, vocab size: {vocab_size}")

# ----------------------------
# 2. Dataset
# ----------------------------
block_size = 64
class CharDataset(Dataset):
    def __init__(self, data, block_size):
        self.data = data
        self.block_size = block_size
    def __len__(self):
        return len(self.data) - self.block_size
    def __getitem__(self, idx):
        x = self.data[idx:idx+self.block_size]
        y = self.data[idx+1:idx+self.block_size+1]
        return x, y

split = int(0.9 * len(data))
train_dataset = CharDataset(data[:split], block_size)
val_dataset = CharDataset(data[split:], block_size)
batch_size = 32
train_loader = DataLoader(train_dataset, batch_size=batch_size, shuffle=True)
val_loader = DataLoader(val_dataset, batch_size=batch_size)

# ----------------------------
# 3. Tiny GPT Model (nanoGPT style)
# ----------------------------
class CausalSelfAttention(nn.Module):
    def __init__(self, config):
        super().__init__()
        assert config.n_embd % config.n_head == 0
        self.c_attn = nn.Linear(config.n_embd, 3 * config.n_embd)
        self.c_proj = nn.Linear(config.n_embd, config.n_embd)
        self.n_head = config.n_head
        self.n_embd = config.n_embd
        self.register_buffer("bias", torch.tril(torch.ones(config.block_size, config.block_size))
                                     .view(1, 1, config.block_size, config.block_size))
    def forward(self, x):
        B, T, C = x.size()
        qkv = self.c_attn(x)
        q, k, v = qkv.split(self.n_embd, dim=2)
        q = q.view(B, T, self.n_head, C // self.n_head).transpose(1,2)
        k = k.view(B, T, self.n_head, C // self.n_head).transpose(1,2)
        v = v.view(B, T, self.n_head, C // self.n_head).transpose(1,2)
        att = (q @ k.transpose(-2,-1)) * (1.0 / math.sqrt(k.size(-1)))
        att = att.masked_fill(self.bias[:,:,:T,:T] == 0, float('-inf'))
        att = F.softmax(att, dim=-1)
        y = att @ v
        y = y.transpose(1,2).contiguous().view(B,T,C)
        y = self.c_proj(y)
        return y

class MLP(nn.Module):
    def __init__(self, config):
        super().__init__()
        self.c_fc = nn.Linear(config.n_embd, 4 * config.n_embd)
        self.c_proj = nn.Linear(4 * config.n_embd, config.n_embd)
        self.gelu = nn.GELU()
    def forward(self, x):
        return self.c_proj(self.gelu(self.c_fc(x)))

class Block(nn.Module):
    def __init__(self, config):
        super().__init__()
        self.ln1 = nn.LayerNorm(config.n_embd)
        self.attn = CausalSelfAttention(config)
        self.ln2 = nn.LayerNorm(config.n_embd)
        self.mlp = MLP(config)
    def forward(self, x):
        x = x + self.attn(self.ln1(x))
        x = x + self.mlp(self.ln2(x))
        return x

class GPT(nn.Module):
    def __init__(self, config):
        super().__init__()
        self.token_emb = nn.Embedding(config.vocab_size, config.n_embd)
        self.pos_emb = nn.Embedding(config.block_size, config.n_embd)
        self.blocks = nn.Sequential(*[Block(config) for _ in range(config.n_layer)])
        self.ln_f = nn.LayerNorm(config.n_embd)
        self.lm_head = nn.Linear(config.n_embd, config.vocab_size, bias=False)
        self.config = config

    def forward(self, idx, targets=None, bag_size=1, use_superposition=False):
        B, T = idx.shape
        pos = torch.arange(0, T, device=idx.device).unsqueeze(0)
        x = self.token_emb(idx) + self.pos_emb(pos)
        x = self.blocks(x)
        x = self.ln_f(x)
        logits = self.lm_head(x)
        loss = None
        if targets is not None:
            if use_superposition and bag_size > 1:
                loss = masked_cross_entropy(logits, targets, bag_size)
            else:
                loss = F.cross_entropy(logits.view(-1, logits.size(-1)), targets.view(-1))
        return logits, loss

def masked_cross_entropy(logits, targets, bag_size):
    B, T, V = logits.shape
    total_loss = 0.0
    n = 0
    for t in range(T):
        end = min(t + bag_size, T)
        for offset in range(end - t):
            target_tok = targets[:, t + offset]
            logit_t = logits[:, t, :]
            total_loss += F.cross_entropy(logit_t, target_tok, reduction='sum')
            n += B
    return total_loss / n

# ----------------------------
# 4. Training function
# ----------------------------
def train_model(bag_size, superposition_steps, max_steps=2000):
    config = SimpleNamespace(
        vocab_size=vocab_size,
        n_embd=128,
        n_head=4,
        n_layer=4,
        block_size=block_size,
        lr=1e-3,
    )
    model = GPT(config)
    optimizer = torch.optim.AdamW(model.parameters(), lr=config.lr)
    step = 0
    train_losses = []
    val_losses = []
    device = 'cpu'
    model.to(device)

    # Precompute total steps per epoch
    steps_per_epoch = len(train_loader)
    total_steps = min(max_steps, steps_per_epoch * 10)  # at most 10 epochs

    start_time = time.time()
    while step < total_steps:
        for x, y in train_loader:
            if step >= total_steps:
                break
            x, y = x.to(device), y.to(device)
            use_super = (step < superposition_steps) and (bag_size > 1)
            logits, loss = model(x, targets=y, bag_size=bag_size, use_superposition=use_super)
            optimizer.zero_grad()
            loss.backward()
            optimizer.step()

            train_losses.append(loss.item())
            if step % 200 == 0:
                print(f"Step {step:5d} | phase: {'super' if use_super else 'recov'} | loss: {loss.item():.4f}")
            step += 1

            # Validation every 400 steps
            if step % 400 == 0:
                model.eval()
                val_loss_sum = 0.0
                with torch.no_grad():
                    for x_val, y_val in val_loader:
                        x_val, y_val = x_val.to(device), y_val.to(device)
                        _, loss_val = model(x_val, targets=y_val, bag_size=1, use_superposition=False)
                        val_loss_sum += loss_val.item()
                val_loss = val_loss_sum / len(val_loader)
                val_losses.append((step, val_loss))
                print(f"   --> Validation loss: {val_loss:.4f}")
                model.train()

    elapsed = time.time() - start_time
    return train_losses, val_losses, elapsed

# ----------------------------
# 5. Run experiments
# ----------------------------
print("=== Baseline (bag_size=1) ===")
train_b1, val_b1, time_b1 = train_model(bag_size=1, superposition_steps=0, max_steps=2000)

print("\n=== TST bag_size=2, super steps=800 (40% of 2000) ===")
train_b2, val_b2, time_b2 = train_model(bag_size=2, superposition_steps=800, max_steps=2000)

print("\n=== TST bag_size=4, super steps=800 ===")
train_b4, val_b4, time_b4 = train_model(bag_size=4, superposition_steps=800, max_steps=2000)

print("\n=== TST bag_size=8, super steps=800 ===")
train_b8, val_b8, time_b8 = train_model(bag_size=8, superposition_steps=800, max_steps=2000)

# ----------------------------
# 6. Simple summary
# ----------------------------
print("\n===== RESULTS =====")
print(f"Baseline       : time = {time_b1:.1f}s, final val loss = {val_b1[-1][1]:.4f}")
print(f"TST bag=2      : time = {time_b2:.1f}s, final val loss = {val_b2[-1][1]:.4f}")
print(f"TST bag=4      : time = {time_b4:.1f}s, final val loss = {val_b4[-1][1]:.4f}")
print(f"TST bag=8      : time = {time_b8:.1f}s, final val loss = {val_b8[-1][1]:.4f}")
```

---

## 🧪 Expected Observations

- **Training time** may be slightly lower for larger bag sizes during the superposition phase because the loss computation aggregates more tokens per step, but the overhead may balance out. On CPU you might not see huge speedups – the point is qualitative comparison.
- **Validation loss** after full training: Usually, TST with moderate bag size (2 or 4) can match baseline, while bag size 8 might degrade.
- **Transition effect**: You might see a temporary loss spike when switching from superposition to recovery – that's interesting to note in your thesis.

---

## 📈 Next Steps for Your Thesis

Once you have this running, you can:

1. **Vary the superposition fraction** (10%, 20%, 50%, 80% of total steps) and plot final performance.
2. **Change model size** (2 layers → 6 layers) to see if TST benefits scale with capacity.
3. **Add a third phase** (gradually reduce bag size) as an extension.
4. **Apply to a low-resource language** by changing the text file.

All of this runs on your laptop – no GPU needed.

---

## 🛠️ Troubleshooting

- If `datasets` is heavy, you can manually download `tiny_shakespeare.txt` from [here](https://raw.githubusercontent.com/karpathy/char-rnn/master/data/tinyshakespeare/input.txt) and load it with `open()`.
- Reduce `max_steps` to 500 for even faster testing.
- Use `device='cpu'` – it's fine for this scale.

You now have a working baseline to build your entire MSc thesis around. Would you like me to help you design a specific set of experiments (e.g., varying bag sizes, measuring loss spike, comparing learning curves) or write the analysis section?