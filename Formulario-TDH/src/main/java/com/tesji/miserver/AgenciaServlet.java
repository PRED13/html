package com.tesji.miserver;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/calcular-impuesto")
public class AgenciaServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/html");
        String origen = req.getParameter("selectOrigen");
        String marca = req.getParameter("selectMarca");
        Long costo = Long.parseLong(req.getParameter("txtCosto"));
        try (PrintWriter out = resp.getWriter()){
            out.println("<!DOCTYPE html>");
            out.println("<html lang=\"es\">");
            out.println("<head>");
            out.println(" <meta charset=\"UTF-8\">");
            out.println("<title>Formularios con Tipos de Datos Abstractos</title>");
            out.println("<LINK rel=\"stylesheet\" href=\"css/estilo.css\">");
            out.println("</head>");
            out.println("<body>");
            out.println("<section class=\"contec-form\">");
            out.println("<h3>Origen: " + origen + "</h3>");
            out.println("<h3>Costo: " + costo + "</h3>");
            out.println("<section >");
            out.println("<body>");
            out.println("<html>");


        }
    }
}