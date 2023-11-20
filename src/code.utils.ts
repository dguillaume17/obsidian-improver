import Prism from 'prismjs';
import { Language } from './language.enum';
require('prismjs/plugins/keep-markup/prism-keep-markup');

export namespace CodeUtils {

    export function highlight(html: string, language: Language): string {
        Language.loadPrismJsLanguage(language);

        const tmpEl = document.createElement('code');
        tmpEl.className = Language.getPrismJsClassName(language);
        tmpEl.innerText = html;
        tmpEl.innerHTML = tmpEl.innerHTML.replace('&lt;mark&gt;', '<mark>');
        tmpEl.innerHTML = tmpEl.innerHTML.replace('&lt;/mark&gt;', '</mark>');

        Prism.highlightElement(tmpEl);

        return tmpEl.innerHTML;
    }

}