export function createSection() {
    let stats = document.createElement('section');
    stats.classList.add('section');



    let block = stats.createElement('div');
    block.classList.add('block');

    let header = block.createElement("h4");
    header.classList.add('header');

    let content = block.createElement('p')
    content.classList.add('content');
}