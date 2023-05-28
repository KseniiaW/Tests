import { getShort } from '../getShort';

describe('getShortName', () => {
    it('Возвращает пустое поле, если не передаем имя', () => {
        const name = getShort(
            {
                hasSwipe: true,
                name: ' ',
            },
        );
        expect(name).toBe('');
    });

    it('Ставит фамилию на первое место, если передаем его вторым элементом строки, фамилия одна буква', () => {
        const name = getShort(
            {
                hasSwipe: true,
                name: 'П Петя',
            },
        );
        expect(name).toBe('Петя П');
    });

    it('Свайпает и возвращает фамилию с точкой, если передаем фамилию первым элементом', () => {
        const name = getShort(
            {
                hasSwipe: true,
                name: 'Иван Иванов Иванович',
            },
        );
        expect(name).toBe('Иванов Иванович И.');
    });
    it('Возвращает имя целиком, если передаем только имя', () => {
        const name = getShort(
            {
                hasSwipe: true,
                name: 'Петя',
            },
        );
        expect(name).toBe('Петя');
    });
    it('Свайпает и возвращает фамилию с точкой, если передаем фамилию и имя', () => {
        const name = getShort(
            {
                hasSwipe: true,
                name: 'Петр Иванов',
            },
        );
        expect(name).toBe('Иванов П.');
    });
    it('Не свайпает имя, но сокращает фамилию при передаче ФИ', () => {
        const name = getShort(
            {
                hasSwipe: false,
                name: 'Петр Иванов',
            },
        );
        expect(name).toBe('П. Иванов');
    });
    it('Не свайпает, но возвращает фамилию с точкой, если передаем фио', () => {
        const name = getShort(
            {
                hasSwipe: false,
                name: 'Петр Иванович Иванов',
            },
        );
        expect(name).toBe('П. Иванович Иванов');
    });
    it('Не свайпает фио и не ставит точку после фамилии, если передаем фамилию одной буквой', () => {
        const name = getShort(
            {
                hasSwipe: false,
                name: 'Ю Ан',
            },
        );
        expect(name).toBe('Ю Ан');
    });
});
