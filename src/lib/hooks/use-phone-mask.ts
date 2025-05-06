/**
 * @description Хук для маски телефона
 * @param {RefObject<HTMLInputElement>} inputRef - ссылка на input
 * @example
 * const inputRef = useRef<HTMLInputElement>(null);
 * usePhoneMask(inputRef);
 * <input ref={inputRef} />
 * */
export const usePhoneMask = (phoneInput: HTMLInputElement) => {
  if (!phoneInput) return;

  const getInputNumbersValue = (input: HTMLInputElement) => {
    return input.value.replace(/\D/g, '');
  };

  const onPhonePaste = (e: ClipboardEvent) => {
    const input = e.target as HTMLInputElement;
    const inputNumbersValue = getInputNumbersValue(input);
    const pasted = e.clipboardData || window.Clipboard;
    if (pasted) {
      const pastedText = (pasted as DataTransfer).getData('Text');
      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;
        return;
      }
    }
  };

  const onPhoneInput = (e: InputEvent) => {
    const input = e.target as HTMLInputElement;
    let inputNumbersValue = getInputNumbersValue(input);
    const selectionStart = input.selectionStart;
    let formattedInputValue = '';

    if (!inputNumbersValue) {
      input.value = '';
      return;
    }

    if (input.value.length !== selectionStart) {
      // Редактирование в середине ввода, не последний символ
      if (e.data && /\D/g.test(e.data)) {
        // Попытка ввести нечисловой символ
        input.value = inputNumbersValue;
      }
      return;
    }

    if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] === '9') inputNumbersValue = `7${inputNumbersValue}`;
      const firstSymbols = inputNumbersValue[0] === '8' ? '8' : '+7';
      formattedInputValue = input.value = `${firstSymbols} `;
      if (inputNumbersValue.length > 1) {
        formattedInputValue += `(${inputNumbersValue.substring(1, 4)}`;
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += `) ${inputNumbersValue.substring(4, 7)}`;
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += `-${inputNumbersValue.substring(7, 9)}`;
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += `-${inputNumbersValue.substring(9, 11)}`;
      }
    } else {
      formattedInputValue = `+${inputNumbersValue.substring(0, 16)}`;
    }
    input.value = formattedInputValue;
  };

  const onPhoneKeyDown = (e: KeyboardEvent) => {
    // Очистить ввод после удаления последнего символа
    const inputValue = (e.target as HTMLInputElement).value.replace(/\D/g, '');
    if (e.keyCode === 8 && inputValue.length === 1) {
      (e.target as HTMLInputElement).value = '';
    }
  };

  phoneInput.addEventListener('keydown', onPhoneKeyDown);
  phoneInput.addEventListener('input', (e: Event) => onPhoneInput(e as InputEvent), false);
  phoneInput.addEventListener('paste', onPhonePaste, false);
};
