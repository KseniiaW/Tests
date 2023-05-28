import { getResult } from '../getResult';

describe('getResult', () => {
    it('Возвращает 1, если resultAdd не пустой и второй элемент массива result больше первого', () => {
        const result = getResult([78, 55], [1, 2]);
        expect(result).toEqual(1);
    });

    it('Возвращает 0, если resultAdd не пустой и второй элемент массива resultAdd меньше первого', () => {
        const result = getResult([78, 55], [1, 0]);
        expect(result).toEqual(0);
    });

    it('Возвращает 1, если resultAdd пустой и второй элемент массива result больше первого', () => {
        const result = getResult([8, 55], []);
        expect(result).toEqual(1);
    });

    it('Возвращает 0, если resultAdditional пустой и второй элемент массива result меньше первого', () => {
        const result = getResult([56, 55], []);
        expect(result).toEqual(0);
    });

    it('Возвращает null, если оба массива пустые', () => {
        const result = getResult([], []);
        expect(result).toEqual(null);
    });

    it('Возвращает null, если массив содержит равнозначные элементы', () => {
        const result = getResult([1, 1], []);
        expect(result).toEqual(null);
    });
});
