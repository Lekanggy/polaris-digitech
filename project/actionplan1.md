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