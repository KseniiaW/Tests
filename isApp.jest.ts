import { isApp } from '../isApp';

describe('isApp', () => {
    it('возвращает true при передаче isApp ', () => {
        const ctx = {
            isApp: true,
            device: { BrowserName: 'Search' },
        } as TAdapterContext['context'];
        expect(isApp(ctx)).toBe(true);
    });

    it('возвращает true при передаче поддерживаемого бразуера ', () => {
        const ctx = {
            isSearchApp: false,
            device: { BrowserName: 'Search' },
        } as TAdapterContext['context'];
        expect(isApp(ctx)).toBe(true);
    });

    it('возвращает false при передаче не поддерживаемого браузера', () => {
        const ctx = {
            isSearchApp: false,
            device: { BrowserName: 'Chrome' },
        } as TAdapterContext['context'];
        expect(isApp(ctx)).toBe(false);
    });
});
