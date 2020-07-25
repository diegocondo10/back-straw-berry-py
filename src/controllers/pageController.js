import Pagina from "../models/Page";


export const crearPagina = async (req, res) => {
  try {

    let pagina;
    pagina = new Pagina(req.body)
    await pagina.save()
    res.status(200)
      .json({
        transaccion: true,
        data: pagina
      })
  } catch (e) {
    res.status(400)
      .json({error: true})
  }
}
