namespace API.Helpers
{
    public class UserParams
    {
        //max page size of 50
        private const int MaxPageSize = 50;
        public int PageNumber { get; set; } = 1;
        //default page size of 10
        private int _pageSize = 10;

        public int PageSize
        {
            get => _pageSize;
            set => _pageSize = (value > MaxPageSize) ? MaxPageSize : value;
        }
        public string CurrentUserName { get; set; }
        public string Gender { get; set; }
        public int MinAge { get; set; } = 18;
        public int MaxAge { get; set; } = 150;
    }
}