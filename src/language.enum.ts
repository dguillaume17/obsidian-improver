import { EnumUtils } from "./enum.utils";

export enum Language {
    Css = 'CSS',
    Html = 'HTML',
    Scss = 'SCSS',
    TypeScript = 'TYPESCRIPT'
}

export namespace Language {

    export function getAll(): Language[] {
        return Object.keys(Language).filter((k: keyof typeof Language) => typeof Language[k] === 'string').map((k: keyof typeof Language) => Language[k]) as Language[];
    }

    export function getObsidianLanguage(language: Language): string {
        switch (language) {
            case Language.Css:
                return 'css2';
            case Language.Html:
                return 'html2';
            case Language.Scss:
                return 'scss2';
            case Language.TypeScript:
                return 'typescript2'
            default:
                EnumUtils.assertUnreachable(language);
        }
    }

    export function getPrismJsClassName(language: Language): string {
        return `language-${getPrismJsLanguage(language)}`;
    }

    export function getPrismJsLanguageFilePath(language: Language): string {
        return `prismjs/components/prism-css`; 
    }

    export function getPrismJsLanguage(language: Language): string {
        switch (language) {
            case Language.Css:
                return 'css';
            case Language.Html:
                return 'html';
            case Language.Scss:
                return 'scss';
            case Language.TypeScript:
                return 'typescript'
            default:
                EnumUtils.assertUnreachable(language);
        }
    }

    export function loadPrismJsLanguage(language: Language) {
        switch (language) {
            case Language.Css:
                return;
            case Language.Html:
                return;
            case Language.Scss:
                require('prismjs/components/prism-scss');
                return;
            case Language.TypeScript:
                require('prismjs/components/prism-typescript');
                return;
            default:
                EnumUtils.assertUnreachable(language);
        }
    }

}