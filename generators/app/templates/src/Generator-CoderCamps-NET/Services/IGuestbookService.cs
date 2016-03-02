using System.Collections.Generic;
using <%= appNamespace %>.Models;

namespace <%= appNamespace %>.Services
{
    public interface IGuestbookService
    {
        IList<GuestbookEntry> ListEntries();
        void SaveEntry(GuestbookEntry entry);
    }
}
