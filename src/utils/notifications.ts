import notify from 'devextreme/ui/notify';

export function showSuccessMessage(message: string) {
    notify({
        message,
        type: 'success',
        displayTime: 3000,
        position: { at: 'top center', my: 'top center', offset: '0 10' },
    }, 'success', 3000);
}

export function showErrorMessage(message: string) {
    notify({
        message,
        type: 'error',
        displayTime: 4000,
        position: { at: 'top center', my: 'top center', offset: '0 10' },
    }, 'error', 4000);
}
