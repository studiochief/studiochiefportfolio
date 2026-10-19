window.photobookGalleries = [
    {
        id: 'kristoffer-gildenlow',
        title: 'Kristoffer Gildenlöw',
        images: Array.from({ length: 18 }, (_, index) => {
            const number = String(index + 1).padStart(2, '0');
            const filename = `KristofferGildenlöw-${number}.jpg`;

            return {
                src: `photos/kristoffergildenlöw/${filename}`,
                alt: `${filename.replace('.jpg', '')}`
            };
        })
    }
];
