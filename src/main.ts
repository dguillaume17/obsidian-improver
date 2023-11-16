import { Editor, MarkdownPostProcessorContext, MarkdownRenderer, MarkdownView, Notice, Plugin } from 'obsidian';

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
		console.log(source, el);
		const styleEl = document.createElement('link');
		styleEl.rel = 'stylesheet';
		styleEl.href = 'prism.css';

		const scriptEl = document.createElement('script');
		scriptEl.type = 'text/javascript';
		scriptEl.src = 'prism.js';


		el.innerHTML = '<div>coucou</div>'
		el.appendChild(styleEl);
		el.appendChild(scriptEl);
	}
}
