const striker = document.getElementById('striker');
let isDragging = false;
let startX, startY;

striker.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const currentY = e.clientY;
    const deltaX = currentX - startX;
    const deltaY = currentY - startY;
    
    striker.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
});

document.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    isDragging = false;
    
    // यहाँ पर हम शूट करने की फिजिक्स जोड़ सकते हैं
    // अभी के लिए हम स्ट्राइकर को वापस उसकी जगह पर ला रहे हैं
    striker.style.transition = 'transform 0.5s';
    striker.style.transform = 'translate(0px, 0px)';
    
    setTimeout(() => {
        striker.style.transition = 'none';
    }, 500);
});
  
