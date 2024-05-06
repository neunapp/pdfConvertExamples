import jsPDF from "jspdf";

export function convertPDF(divElement) {
    // primer ejemplo
    // const doc = new jsPDF()
    // doc.text('hola desde neunapp', 5, 5)
    // doc.text('hola neun 2', 10, 10)
    // doc.save('reporte')
    // ============== segundo ejemplo
    // const doc = new jsPDF()
    // const tituloEstilo = {
    //     fontSize: 16,
    //     fontStyle: 'bold',
    //     textAlign: 'center',
    //     marginBottom: 10
    // };
    // const subtituloEstilo = {
    //     fontSize: 14,
    //     fontStyle: 'bold',
    //     marginBottom: 5
    // };
    // const contenidoEstilo = {
    //     fontSize: 12,
    //     marginBottom: 5
    // };

    // // Contenido del recibo
    // const titulo = "Recibo de Compra";
    // const subtitulo = "Detalles de la compra:";
    // const contenido = "Producto: Zapatos\nPrecio: $50.00\nCantidad: 1\nTotal: $50.00";

    // doc.text(titulo, 105, 20, tituloEstilo)
    // doc.text(subtitulo, 20, 40, subtituloEstilo)
    // doc.text(contenido, 20, 60, contenidoEstilo)

    // doc.line(20, 150, 190, 150)
    // doc.text('firma', 105, 160, {align: "center"})
    // doc.save('reporte.pdf')


    // ========= ejemplo de html ===
    const doc = new jsPDF()
    const element = document.getElementById(divElement)

    doc.html(element, {
        callback: function (pdf) {
            pdf.save('documento.pdf')
        },
        x: 15,
        y: 0,
        html2canvas: { scale:0.15 }
    })
}