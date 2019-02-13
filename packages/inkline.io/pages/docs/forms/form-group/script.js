import View from '@components/View';
import { IFormGroup, IInput, ITextarea, ICheckbox, ICheckboxGroup, IRadio, IRadioGroup } from '@inkline/inkline';

export default {
    extends: View,
    name: 'FormGroupView',
    layout: 'documentation',
    components: {
        IFormGroup,
        IInput,
        ITextarea,
        ICheckbox,
        ICheckboxGroup,
        IRadio,
        IRadioGroup
    },
    data () {
        return {
            input: '',
            textarea: '',
            select: '',
            checkbox: ['Football'],
            radio: 'Decline',
            inputDisabled: '',
            textareaDisabled: '',
            selectDisabled: '',
            checkboxDisabled: ['Football'],
            radioDisabled: 'Decline',
            inputSizeSm: '',
            textareaSizeSm: '',
            selectSizeSm: '',
            checkboxSizeSm: ['Football'],
            radioSizeSm: 'Decline',
            inputSizeMd: '',
            textareaSizeMd: '',
            selectSizeMd: '',
            checkboxSizeMd: ['Football'],
            radioSizeMd: 'Decline',
            inputSizeLg: '',
            textareaSizeLg: '',
            selectSizeLg: '',
            checkboxSizeLg: ['Football'],
            radioSizeLg: 'Decline',
            inputNested: '',
            passwordNested: '',
            textareaNested: '',
            selectNested: '',
            checkboxNested: ['Football'],
            radioNested: 'Decline',
        };
    }
};