export function createProductBlock(title, imageUrl, sales, revenue, views, conversion) {
    const block = document.createElement('div');
    block.classList.add('product-block');

    const image = document.createElement('img');
    image.src = imageUrl;
    block.appendChild(image);

    const heading = document.createElement('h2');
    heading.textContent = title;
    block.appendChild(heading);

    const salesParagraph = document.createElement('p');
    salesParagraph.textContent = 'Sales: ' + sales;
    block.appendChild(salesParagraph);

    const revenueParagraph = document.createElement('p');
    revenueParagraph.textContent = 'Revenue: ' + revenue;
    block.appendChild(revenueParagraph);

    const viewsParagraph = document.createElement('p');
    viewsParagraph.textContent = 'Views: ' + views;
    block.appendChild(viewsParagraph);

    const conversionParagraph = document.createElement('p');
    conversionParagraph.textContent = 'Conversion: ' + conversion;
    block.appendChild(conversionParagraph);

    return block;
}
