export const get = () => {
    const data = {
        "name": "Ishan",
        "age": 20,
        "gender": "Male"
    }
    return new Response(JSON.stringify(data), {
        headers: { 'content-type': 'application/json' },
    });
};