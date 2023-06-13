export function createProductBlock(title, imageUrl, sales, revenue, views, conversion) {
    const block = document.createElement('div');
    block.classList.add('product-block');

    const image = document.createElement('img');
    image.src = imageUrl;
    block.appendChild(image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    block.appendChild(productInfo);
    
    const heading = document.createElement('h2');
    heading.textContent = title;
    productInfo.appendChild(heading);
    
    const productProps = document.createElement('div');
    productProps.classList.add('product-props');

    const salesParagraph = document.createElement('p');
    salesParagraph.innerHTML = 'Sales ' + sales;
    productProps.appendChild(salesParagraph);

    const revenueParagraph = document.createElement('p');
    revenueParagraph.textContent = 'Revenue ' + revenue;
    productProps.appendChild(revenueParagraph);

    const viewsParagraph = document.createElement('p');
    viewsParagraph.textContent = 'Views ' + views;
    productProps.appendChild(viewsParagraph);

    const conversionParagraph = document.createElement('p');
    conversionParagraph.textContent = 'Conversion ' + conversion;
    productProps.appendChild(conversionParagraph);

    productInfo.appendChild(productProps);

    return block;
}
