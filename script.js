function generatePDF() {
    // Mostrar mensaje de carga
    const loadingMessage = document.createElement('div');
    loadingMessage.style.position = 'fixed';
    loadingMessage.style.top = '50%';
    loadingMessage.style.left = '50%';
    loadingMessage.style.transform = 'translate(-50%, -50%)';
    loadingMessage.style.padding = '20px';
    loadingMessage.style.background = 'rgba(0, 0, 0, 0.8)';
    loadingMessage.style.color = 'white';
    loadingMessage.style.borderRadius = '8px';
    loadingMessage.style.zIndex = '1000';
    loadingMessage.textContent = 'Generando PDF...';
    document.body.appendChild(loadingMessage);

    // Obtener el elemento a convertir
    const element = document.getElementById('cv-content');
    
    // Configuración para el PDF
    const options = {
        margin: [10, 10, 10, 10],
        filename: 'CV_Moderno.pdf',
        image: { 
            type: 'jpeg', 
            quality: 1 
        },
        html2canvas: { 
            scale: 2,
            useCORS: true,
            letterRendering: true
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'portrait'
        },
        pagebreak: { 
            mode: ['avoid-all', 'css', 'legacy'],
            before: '.page-break'
        }
    };

    // Generar el PDF
    html2pdf()
        .set(options)
        .from(element)
        .save()
        .then(() => {
            // Eliminar mensaje de carga
            document.body.removeChild(loadingMessage);
            
            // Mostrar mensaje de éxito
            const successMessage = document.createElement('div');
            successMessage.style.position = 'fixed';
            successMessage.style.top = '20px';
            successMessage.style.left = '50%';
            successMessage.style.transform = 'translateX(-50%)';
            successMessage.style.padding = '15px 30px';
            successMessage.style.background = '#2ecc71';
            successMessage.style.color = 'white';
            successMessage