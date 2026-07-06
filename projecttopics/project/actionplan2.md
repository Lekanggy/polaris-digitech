## Action Plan for Option 2 Research (TST for Low‑Resource Language Modeling)

### Duration: 4–5 Months (20 weeks)
### Resource: Standard laptop (CPU) + free Google Colab (CPU/TPU)
### Goal: Produce an MSc thesis that evaluates whether Token Superposition Training improves pre‑training efficiency for a low‑resource language, compared to standard training.

---

## 📅 Phase 1: Language Selection & Data Collection (Weeks 1–4)

### Week 1 – Literature & Language Selection
- Read TST paper and 2–3 papers on low‑resource NLP (e.g., using small corpora, transfer learning).
- Identify candidate low‑resource languages that you can access text for. Criteria:
  - Not widely supported by major LLMs (e.g., not English, Chinese, Spanish, French, German).
  - Existence of *some* public domain or permissively licensed text (news, government documents, literature, religious texts).
  - You may have personal or local access (e.g., your native language, community newspapers).
- **Deliverable**: List of 3–5 candidate languages with approximate available text size (target: 5–20 MB of clean text).

### Week 2 – Data Sourcing
- Search Hugging Face Datasets: filter by language (e.g., "Swahili", "Hausa", "Yoruba", "Tagalog", "Bengali", "Tamil", "Nepali", etc.).
- If none found, use alternative sources:
  - **Global Voices** (news translations, CC BY 3.0)
  - **Project Gutenberg** (out‑of‑copyright books, some in many languages)
  - **Opus Corpus** (parallel texts, but you need only monolingual)
  - **Wikipedia dumps** (use a small sample, e.g., 10 MB of article text)
  - **Local sources**: digitized newspapers, public speeches, religious texts (e.g., Bible translations are often public domain).
- **Deliverable**: At least one confirmed dataset (URL or local file) of minimum 2 MB text (preferably 5–10 MB).

### Week 3 – Data Cleaning & Preparation
- Load the text file, remove non‑linguistic artifacts (e.g., HTML tags, excessive punctuation, line numbers).
- Convert to plain UTF‑8 text. Ensure consistent encoding.
- Compute statistics: total characters, unique characters (vocabulary size), approximate number of tokens (character‑level is fine).
- Split into train (90%) and validation (10%).
- Write a small script `load_lowresource.py` that returns the text as a string.
- **Deliverable**: Cleaned train/val text files + character‑level vocabulary list.

### Week 4 – Baseline Model Setup & Small‑Scale Test
- Adapt the TST code from Option 1 (or use `nanoGPT`) to load your custom text.
- Train a tiny baseline (standard cross‑entropy) for 500 steps to verify everything works.
- Measure training time per step on your laptop CPU.
- **Deliverable**: Working baseline training script for your low‑resource language.

---

## 🧪 Phase 2: Pilot Experiments & Hyperparameter Tuning (Weeks 5–7)

### Week 5 – Baseline Full Run (Small Step Budget)
- Train baseline (bag_size=1) on your full dataset for a fixed step budget, e.g., 3000 steps (or until validation loss plateaus, whichever comes first).
- Record loss curve, final validation loss, total training time.
- Run 2 seeds to estimate variance.
- **Deliverable**: Baseline performance (mean loss ± std, time).

### Week 6 – Pilot TST with Fixed Bag Size
- Fix bag_size = 4 (as a middle value from original paper).
- Vary superposition fraction: 20%, 40%, 60% of total steps (total steps = 3000).
- Run each configuration with 1 seed (quick exploration).
- Observe final validation loss and any loss spike at transition.
- **Deliverable**: Plot of validation loss vs. superposition fraction.

### Week 7 – Pilot Sweep of Bag Sizes
- Fix superposition fraction at best from Week 6 (e.g., 40%).
- Try bag_size = 2, 4, 8 (and 16 if memory allows).
- Run 1 seed each.
- Record training time and final loss.
- **Deliverable**: Table showing time/loss trade‑off for each bag size.

---

## 📊 Phase 3: Main Experiments (Weeks 8–12)

### Week 8 – Experiment Design & Batch Script
- Based on pilot results, select:
  - Baseline (bag=1)
  - 2–3 TST configurations (e.g., bag=2, bag=4, bag=8) with optimal fraction.
- Set total steps to 5000 (or until validation loss no longer improves).
- Decide on number of seeds: at least 3 per configuration (for statistical reliability).
- Write a script to run experiments sequentially (or use a simple shell loop).
- **Deliverable**: Experiment design document + batch run script.

### Week 9 – Run Baseline (3 seeds)
- Run three independent baseline training runs.
- Each run may take several hours (5000 steps × batch size 32 on CPU). Use overnight runs.
- Record logs: step, train loss, validation loss (every 500 steps), time elapsed.
- **Deliverable**: Three log files for baseline.

### Week 10 – Run TST bag=2 and bag=4 (3 seeds each)
- Same procedure as Week 9.
- Ensure the transition point is correctly logged.
- If any run diverges (loss becomes NaN), note and re‑run with lower learning rate or gradient clipping.
- **Deliverable**: Log files for bag=2 and bag=4.

### Week 11 – Run TST bag=8 (3 seeds) and possibly best config extended
- Run bag=8.
- If time permits, run one best TST config for longer (10,000 steps) to see if gap persists.
- **Deliverable**: Logs for bag=8 + optional extended run.

### Week 12 – Data Aggregation & Preliminary Plots
- Load all logs into a pandas DataFrame.
- Compute per‑configuration:
  - Mean and std of final validation loss.
  - Mean and std of total training time.
  - Loss at transition (if applicable) and recovery rate.
- Plot learning curves (loss vs. steps) with shaded std.
- Create a bar chart comparing final validation loss across configurations.
- Create a scatter plot of training time vs. final loss (Pareto frontier).
- **Deliverable**: Set of high‑quality figures (ready for thesis).

---

## ✍️ Phase 4: Analysis & Writing (Weeks 13–16)

### Week 13 – Interpret Results in Low‑Resource Context
- Answer research questions:
  - Does TST provide a training time advantage for this low‑resource language?
  - Is the advantage similar to or different from the original paper’s findings (on English)?
  - Does larger bag size cause degradation due to small dataset size?
- Discuss any overfitting observed and possible reasons.
- **Deliverable**: Bullet‑point analysis and draft of Discussion section.

### Week 14 – Write Methodology Chapter
- Describe the low‑resource language chosen and justification.
- Detail data collection, cleaning, and vocabulary construction.
- Explain model architecture (same as Option 1, but note any modifications).
- Specify TST implementation details (bag sizes, switching schedule, loss).
- **Deliverable**: Draft of Chapter 3 (Methodology).

### Week 15 – Write Results Chapter
- Present tables with mean ± std for each configuration.
- Show learning curves and Pareto chart.
- Include statistical tests (e.g., Welch’s t‑test between baseline and best TST).
- **Deliverable**: Draft of Chapter 4 (Results).

### Week 16 – Write Discussion, Conclusion, and Introduction
- **Discussion**: Compare to prior work; explain why TST may (or may not) help low‑resource settings.
- **Conclusion**: Summarize findings, limitations (small dataset, character‑level, one language), future work (subword tokenization, more languages).
- **Introduction**: Motivate the problem of low‑resource languages being left behind; state your contribution.
- **Deliverable**: Complete thesis draft (Chapters 1–6).

---

## 🔁 Phase 5: Revision & Submission (Weeks 17–20)

### Week 17 – Supervisor Feedback
- Send draft to supervisor.
- Address comments, add missing experiments if requested (e.g., an additional language or bag size).
- **Deliverable**: Revised draft.

### Week 18 – Final Experiments (if needed)
- If supervisor asks for more seeds or a different hyperparameter, run them quickly.
- Update figures and tables.
- **Deliverable**: Final results integrated.

### Week 19 – Formatting & Proofreading
- Format according to university guidelines.
- Proofread for clarity, grammar, and consistency.
- Ensure all code and data (except copyrighted text) are shared on GitHub.
- **Deliverable**: Final thesis PDF + code repository.

### Week 20 – Submission & Defense Preparation
- Submit thesis.
- Prepare a 15‑minute presentation:
  - Problem, method, key results, low‑resource implications.
- Practice answering likely questions (e.g., “Why not use subword tokenization?”, “Could you have used transfer learning instead?”).
- **Deliverable**: Thesis submitted + defense slides.

---

## 🛠️ Tools & Resources Checklist (Option 2)

| Category | Item | Notes |
|----------|------|-------|
| **Coding** | Python, PyTorch (CPU), numpy, matplotlib, pandas | Free |
| **Data** | Public domain / permissive text in target language | Must be obtained legally |
| **Version control** | GitHub (private or public) | Free for students |
| **Writing** | Overleaf (LaTeX) or Word | Use university template |
| **Time tracking** | Spreadsheet or Toggl | To monitor progress |
| **Backup** | Google Drive / USB drive | Daily backups of code, logs, and thesis |

---

## ⚠️ Risk Mitigation (Option 2 Specific)

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|-------------|
| No suitable public dataset for chosen language | Medium | High | Start with a language you know has *some* text (e.g., Bible translation, Wikipedia stub). If nothing, create a tiny corpus (e.g., 100KB) as proof‑of‑concept. |
| Text is too small (< 1 MB) leads to severe overfitting | Medium | Medium | Use strong regularization (dropout 0.2, weight decay 0.01). Reduce model size (2 layers, 64 embedding dim). Frame as study of extreme low‑resource scenario. |
| Character‑level tokenization produces large vocabulary (> 500 chars) | Low | Low | That’s fine; model scales with vocab size. Or use a simple byte‑pair encoding (BPE) if you have time, but character‑level is simpler for thesis. |
| Runs take too long on CPU | Medium | Medium | Reduce total steps from 5000 to 3000. Use Google Colab free T4 GPU occasionally (e.g., for final runs). |
| No clear benefit of TST found | Medium | Low | Negative results are still publishable. Explain why (dataset too small, language structure different). Suggest future improvements. |
| Supervisor doubts relevance of character‑level modeling | Low | Medium | Justify: character‑level is common in low‑resource settings because subword tokenizers may be unavailable or untrained. Show examples from literature. |

---

## 📈 Success Criteria (Option 2)

After 4–5 months, you will have:
- A **reproducible pipeline** for training small LMs on a low‑resource language.
- **Empirical evidence** (quantitative) of whether TST accelerates training compared to baseline.
- **At least one clear conclusion** such as: *“For a 5 MB Hausa text corpus, TST with bag size 4 and 40% superposition reduces training time by 18% with no statistically significant loss in validation perplexity.”*
- A **full thesis draft** (40–60 pages) that contributes to both efficient training methods and low‑resource NLP.
- **Open‑source code and cleaned dataset** (if permissible) – a tangible contribution to the community.

---

This plan is realistic, self‑contained, and requires no paid hardware. Start by selecting your language and finding text – that is the most critical step. Would you like help with writing a Python script to download and clean a sample dataset from Hugging Face?