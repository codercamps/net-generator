using <%= appNamespace %>.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace <%= appNamespace %>.Services
{
    public class GuestbookService
    {
        private static List<GuestbookEntry> _entries;
        private static int _entryId;

        static GuestbookService()
        {
            _entries = new List<GuestbookEntry> {
                new GuestbookEntry {Id=1, Author="Stephen", Message="Welcome to learning how to code!", DateCreated=DateTime.Now },
                new GuestbookEntry {Id=2, Author="Jeremy", Message="Hello and welcome!", DateCreated=DateTime.Now },
            };

            // unique entry id
            _entryId = _entries.Count();
        }

        public IList<GuestbookEntry> ListEntries()
        {
            return _entries;
        }



        public void SaveEntry(GuestbookEntry entry)
        {
            entry.Id = ++_entryId;
            entry.DateCreated = DateTime.Now;
            _entries.Add(entry);
        }


    }
}
