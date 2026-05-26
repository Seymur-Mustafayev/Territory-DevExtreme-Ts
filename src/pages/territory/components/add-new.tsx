import { useRef, useState } from 'react';
import Form, { SimpleItem, GroupItem, RequiredRule, Label } from 'devextreme-react/form';
import { Button } from 'devextreme-react/button';
import { useNavigate } from 'react-router-dom';
import useAddTerritory from '../api/add-territory';
import type { Territory } from '../types/territory';

export default function AddNew() {
    const navigate = useNavigate();
    const { mutate, isPending } = useAddTerritory();
    const formRef = useRef<any>(null);
    const [formData, setFormData] = useState<Territory>({
        name: '',
        code: '',
        region:''
    });

    const onSubmit = () => {
        const validationResult = formRef.current?.instance.validate && formRef.current.instance.validate();
        if (validationResult && !validationResult.isValid) {
            return;
        }

        mutate(formData, {
            onSuccess: () => navigate('/')
        });
       
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Add New Territory</h2>

            <Form
                ref={formRef}
                onFieldDataChanged={(e) => {
                    setFormData(prev => ({
                        ...prev,
                        [e.dataField as keyof Territory]: e.value
                    } as Territory));
                }}
            >
                <GroupItem colCount={2} caption="Territory Information">
                    <SimpleItem dataField="name" editorType="dxTextBox">
                        <Label text="Name" />
                        <RequiredRule message="Name is required" />
                    </SimpleItem>

                    <SimpleItem dataField="code" editorType="dxTextBox">
                        <Label text="Code" />
                        <RequiredRule message="Code is required" />
                    </SimpleItem>
                    <SimpleItem dataField="region" editorType="dxTextBox">
                        <Label text="Region" />
                        <RequiredRule message="Region is required" />
                    </SimpleItem>
                </GroupItem>
            </Form>

            <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                <Button
                    text={isPending ? 'Saving...' : 'Save'}
                    type="success"
                    stylingMode="contained"
                    disabled={isPending}
                    onClick={onSubmit}
                />
                <Button
                    text="Cancel"
                    type="danger"
                    stylingMode="contained"
                    onClick={() => navigate('/')}
                />
            </div>
        </div>
    );
}