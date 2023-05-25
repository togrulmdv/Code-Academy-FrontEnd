
import { createStatsBlock } from "./components/stats/stats.js";
import { createProductBlock } from "./components/products/products.js";

//=====================================================================================================

// Create section element with class "sidebar section"
const section = document.createElement('section');
section.className = 'sidebar section';

// Create unordered list element with class "nav"
const ul = document.createElement('ul');
ul.className = 'nav';

// Array of menu items
const menuItems = [
  { iconClass: 'fa-solid fa-house', text: 'Home' },
  { iconClass: 'fa-solid fa-gift', text: 'Products' },
  { iconClass: 'fa-solid fa-chart-line', text: 'Analytics' },
  { iconClass: 'fa-solid fa-dollar-sign', text: 'Affiliates' },
  { iconClass: 'fa-solid fa-users', text: 'Audience' },
  { iconClass: 'fa-solid fa-gear', text: 'Settings' }
];

// Create menu items dynamically
menuItems.forEach(item => {
  const li = document.createElement('li');
  li.className = 'nav-item';

  const icon = document.createElement('i');
  icon.className = item.iconClass;

  const link = document.createElement('a');
  link.href = '#';
  link.textContent = item.text;

  li.appendChild(icon);
  li.appendChild(link);

  ul.appendChild(li);
});

section.appendChild(ul);

//=====================================================================================================

const logo = document.createElement("a");
logo.className = "logo";
logo.href = "#";
logo.textContent = "T";

logo.addEventListener('click', function() {
  // Toggle the "open" class on the sidebar section to show/hide it
  section.classList.toggle('open');
  logo.classList.toggle('index');
});

//=====================================================================================================

// Create stats section
const statsSection = document.createElement('section');
statsSection.classList.add('stats-section');

// Create sales block
const salesBlock = createStatsBlock('SALES', '2.273', '12% MoM');
statsSection.appendChild(salesBlock);

// Create revenue block
const revenueBlock = createStatsBlock('REVENUE', '$46.920', '7% MoM');
statsSection.appendChild(revenueBlock);

// Create views block
const viewsBlock = createStatsBlock('VIEWS', '106.4k', '4% MoM');
statsSection.appendChild(viewsBlock);

//=====================================================================================================

// Create products section
const productsSection = document.createElement('section');
productsSection.classList.add('products-section');

// Create 8k Gradient Wallpaper Pack block
const wallpaperBlock = createProductBlock(
  '8k Gradient Wallpaper Pack',
  'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
  '1,000',
  '$5,000',
  '10,000',
  '10%'
);
productsSection.appendChild(wallpaperBlock);

// Create iOS 16 Icon Pack block
const iconPackBlock = createProductBlock(
  'iOS 16 Icon Pack',
  'https://cdn.apk-cloud.com/detail/screenshot/N0PoCFp6YSQueubmVA-Q4MPGXk_WaZXrEvHjRDCo8p3q2EzSWzJu4z6FA4SMsa_449c=h900.png',
  '500',
  '$2,500',
  '5,000',
  '8%'
);
productsSection.appendChild(iconPackBlock);

//=====================================================================================================

// Append sections to the root element
const rootElement = document.getElementById('root');
rootElement.appendChild(logo);
rootElement.appendChild(section);
rootElement.appendChild(statsSection);
rootElement.appendChild(productsSection);

