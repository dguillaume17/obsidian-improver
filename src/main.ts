import { MarkdownPostProcessorContext, Plugin } from 'obsidian';
import { CodeUtils } from './code.utils';
import { Language } from './language.enum';

export default class ObsidianImprover extends Plugin {

	// Lifecycle

	async onload() {
        Language.getAll().forEach(language => {
            this.registerMarkdownCodeBlockProcessor(Language.getObsidianLanguage(language), async (source, el, ctx) => {
                await this.handleCodeBlock(source, el, ctx, language);
            });
        });
  		
	}

	public onunload() { }

	// Inner work

	private async handleCodeBlock(source: string, el: HTMLElement, ctx: MarkdownPostProcessorContext, language: Language) {
        el.innerHTML = CodeUtils.highlight(source, language);
	}
}
