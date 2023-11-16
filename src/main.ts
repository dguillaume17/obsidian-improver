import { MarkdownPostProcessorContext, Plugin } from 'obsidian';
import Prism from 'prismjs';

export default class ObsidianImprover extends Plugin {

	// Lifecycle

	async onload() {
  		this.registerMarkdownCodeBlockProcessor('gmd', async (source, el, ctx) => {
			await this.handleGmdCodeBlock(source, el, ctx);
		});
	}

	public onunload() { }

	// Inner work

	private async handleGmdCodeBlock(source: string, el: HTMLElement, ctx: MarkdownPostProcessorContext) {
        // The code snippet you want to highlight, as a string
        const code = `var data = <mark>1</mark>;`;

        // Returns a highlighted HTML string
        const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');

        console.log(html);

        el.innerHTML = html;

		// console.log(source, el);
		// const styleEl = document.createElement('link');
		// styleEl.rel = 'stylesheet';
		// styleEl.href = 'prism.css';

		// const scriptEl = document.createElement('script');
		// scriptEl.type = 'text/javascript';
		// scriptEl.src = 'prism.js';


		// el.innerHTML = '<div>coucou</div>'
		// el.appendChild(styleEl);
		// el.appendChild(scriptEl);
	}
}
