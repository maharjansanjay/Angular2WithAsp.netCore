using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Angular2WithCore.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Angular2WithCore.Controllers
{
    [Route("api/[controller]")]
    public class HerosController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<Hero> Get()
        {
            List<Hero> heros = new List<Hero>
            {
                new Hero { Id = 1, Name= "Sanjay"},
                new Hero { Id = 2, Name= "Maharjan"}
            };
            return heros;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
