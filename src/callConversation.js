/**
 * @api {POST} /call-conversation/register Registrar llamada por documento
 * @apiVersion 1.0.0
 * @apiName Registrar llamada por documento
 * @apiGroup LLamada telefónica
 *
 * @apiDescription Registrar llamada por documento de identidad
 *
 * @apiBody          {Number} documentTypeCode  Código de tipo de documento
 * @apiBody          {String} documentNumber    N° de documento
 *
 * @apiSuccess (201) {Number} codError          Codigo de error
 * @apiSuccess (201) {String} msgError          Mensaje de error
 *
 * @apiError TX01 Código de Tipo de documento nulo
 * @apiError TX02 Número de documento nulo
 * @apiError TX03 Persona no registrada
 * @apiError TX04 Tarjeta habiente no asociada a la persona
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *       "codError": 'TX00',
 *       "msgError": "Operación exitosa",
 *     }
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "codError": 'TX03',
 *       "msgError": "Persona no registrada",
 *     }
 */
