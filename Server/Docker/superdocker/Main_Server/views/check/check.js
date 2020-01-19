const key_list = ['db', '11st', 'joongna'];

const button_list = key_list.map(key =>
    document.getElementById(`${key}_button`).addEventListener('click', e => {
        const message = key_to_fn[key];
        document.getElementById(`${key}_code`).textContent = message;
    }),
);

const checkDBServer = () => {
    return 'DB';
};

const check11stServer = () => {
    return '11st';
};

const checkJoongnaServer = () => {
    return 'joongna';
};

const key_to_fn = {
    'db': checkDBServer(),
    '11st': check11stServer(),
    'joongna': checkJoongnaServer(),
};
