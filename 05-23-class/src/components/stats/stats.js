export function createStatsBlock(title, sales, content) {
    const block = document.createElement('div');
    block.classList.add('stats-block');

    const heading = document.createElement('h2');
    heading.textContent = title;
    block.appendChild(heading);

    const salesParagraph = document.createElement('p');
    salesParagraph.textContent = sales;
    block.appendChild(salesParagraph);

    const salesContent = document.createElement('div');
    salesContent.textContent = content;
    block.appendChild(salesContent);

    return block;
}