using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static System.Net.Mime.MediaTypeNames;
using System.Diagnostics.Metrics;

namespace Figma_To_Frontend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssessmentsController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<Assessment>>> GetAssessments()
        {
            return new List<Assessment>
            {
                new Assessment
                {
                    Id = 1,
                    Status = true,
                    Title = "HR Officer: Critical listening Skills",
                    Tests = 3,
                    Questions = 39,
                    Country = "Kuwait",
                    Industry = "Construction",
                    JobFamily = "Blue collar",
                },
                new Assessment
                {
                    Id = 2,
                    Status = false,
                    Title = "HR Officer: Mediation Skills",
                    Tests = 3,
                    Questions = 24,
                    Country = "Jordan",
                    Industry = "Technology",
                    JobFamily = "White collar",
                },
                new Assessment
                {
                    Id = 3,
                    Status = true,
                    Title = "HR Officer: Persuasion Skills",
                    Tests = 4,
                    Questions = 65,
                    Country = "All Countries",
                    Industry = "Management",
                    JobFamily = "White collar",
                },
                new Assessment
                {
                    Id = 4,
                    Status = false,
                    Title = "HR Risk Assessment",
                    Tests = 2,
                    Questions = 18,
                    Country = "Kuwait",
                    Industry = "Technology",
                    JobFamily = "White collar",
                },
                new Assessment
                {
                    Id = 5,
                    Status = true,
                    Title = "Hiring Manager: Communication Skills",
                    Tests = 3,
                    Questions = 48,
                    Country = "Kuwait",
                    Industry = "Technology",
                    JobFamily = "White collar",
                },
            };
        }
    }

}
