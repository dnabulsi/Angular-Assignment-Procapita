using System.ComponentModel.DataAnnotations;

namespace Figma_To_Frontend
{
    public class Assessment
    {
        [Key]
        public int Id { get; set; }
        public bool Status { get; set; }
        public string? Title {  get; set; }
        public int Tests { get; set; }
        public int Questions { get; set; }
        public string? Country { get; set; }
        public string? Industry { get; set; }
        public string? JobFamily { get; set; }


    }
}
