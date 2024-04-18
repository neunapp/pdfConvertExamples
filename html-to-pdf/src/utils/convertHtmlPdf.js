import html2pdf from 'html2pdf.js'

export function convertHtmlPdf(divElement) {
    const element = document.getElementById(divElement)

    const options = {
        filename: 'ejemplo.pdf',
        image: { type: 'pdf', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait', // landscape
            margin: {top: 2, right: 3, bottom: 2, left: 3}
        }
    }

    html2pdf().set(options).from(element).toPdf().get('pdf').then(
        function(pdf) {
            const newWindow = window.open(pdf.output('bloburl'), '_blank');
            if (newWindow) {
                newWindow.onload = () => {
                    newWindow.print()
                }
            }
        }
    )
}