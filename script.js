const pinsData = [
    {
      name: 'Town 1',
      link: 'https://www.notion.so/696a3e54943344049982c35b5698041f?v=2a0b3ef1338d49ae857d77e3f57515d3&p=a20f00772fe8485a871fb312222e0622&pm=s',
      x: 0.25,
      y: 0.3
    },
    // Add more pins as needed
  ];
  
  const mapImage = document.getElementById('map-image');
  
  mapImage.addEventListener('load', () => {
    pinsData.forEach(pin => {
      const pinElement = document.createElement('a');
      pinElement.classList.add('pin');
      pinElement.href = pin.link;
      pinElement.target = '_blank';
      pinElement.textContent = pin.name;
  
      pinElement.style.left = `${pin.x * 100}%`;
      pinElement.style.top = `${pin.y * 100}%`;
  
      mapImage.parentElement.appendChild(pinElement);
    });
  });
  