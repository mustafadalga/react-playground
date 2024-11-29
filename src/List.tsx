const resource = createResource(fetchData('/api/data'));

export default function List(){

    const data = resource.read()
    return <div>{data}</div>;
}

function fetchData(url) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Data from ${url}`);
        }, 2000);
    });
}

function createResource(promise) {
    let status = 'pending';
    let result;
    let suspender = promise.then(
        (r) => {
            status = 'success';
            result = r;
        },
        (e) => {
            status = 'error';
            result = e;
        }
    );
    return {
        read() {
            if (status === 'pending') {
                throw suspender; // Suspense'i beklemeye al
            } else if (status === 'error') {
                throw result; // Hata fırlat
            } else if (status === 'success') {
                return result; // Veriyi döndür
            }
        }
    };
}
