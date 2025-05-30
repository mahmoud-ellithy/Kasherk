using System.Threading.Tasks;

namespace eLite.Kasherk.Data;

public interface IKasherkDbSchemaMigrator
{
    Task MigrateAsync();
}
