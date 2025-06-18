# Getting Started

Welcome to the **Doc Example** project! This guide will help you quickly get up and running with our documentation setup.

## ⚙️ Prerequisites

Before you begin, make sure you have the following installed:

- [Python 3.8+](https://www.python.org/downloads/)
- [pip](https://pip.pypa.io/)
- [MkDocs](https://www.mkdocs.org/) and [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- Optional: [Docker](https://www.docker.com/) for isolated builds

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/lrmonotch/doc-example.git
cd doc-example
```

Install the required Python packages:

```bash
pip install -r requirements.txt
```

## 🛠️ Usage

To serve the documentation locally:

```bash
mkdocs serve
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

To build the static site:

```bash
mkdocs build
```

The output will be in the `site/` folder.

## 📦 Project Structure

```
doc-example/
├── docs/              # Markdown files for each page
│   ├── index.md       # Homepage
│   └── getting-started.md  # This file
├── mkdocs.yml         # MkDocs configuration
├── requirements.txt   # Python dependencies
└── ...
```

## ⌛ Try an Example

You can explore real code examples under the [`examples/`](../examples/) directory:

```bash
cd examples
python greet.py
```

Or check out other examples in different languages like Ruby and JavaScript.

## 🗃️ Additional Commands

- Check links: `mkdocs build --strict`
- Deploy to GitHub Pages: `mkdocs gh-deploy`

## ❓ FAQ

**Q: Can I add my own pages?**  
A: Yes! Just create a new `.md` file in `docs/` and link it in `mkdocs.yml`.

**Q: How do I customize the theme?**  
A: Update the `mkdocs.yml` with your desired theme options under the `theme` section.

---

Happy documenting!
