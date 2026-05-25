import usePostTerritory from '../api/post-territory';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function AddNew() {
    const navigate = useNavigate();
    const { mutate, isPending } = usePostTerritory();
    const [formData, setFormData] = useState({ name: '', code: '' });

    const onSubmit = () => {
        mutate(formData, {
            onSuccess: () => {
                navigate('/');
            }
        });
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Add New Territory</h2>

            <input
                placeholder="Name"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
                placeholder="Code"
                onChange={(e) => setFormData({ ...formData, code: e.target.value })}
            />

            <button onClick={onSubmit} disabled={isPending}>
                {isPending ? 'Saving...' : 'Save'}
            </button>
            <button onClick={() => navigate('/')}>Cancel</button>
        </div>
    );
}