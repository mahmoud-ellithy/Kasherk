using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace eLite.Kasherk.Data;

/* This is used if database provider does't define
 * IKasherkDbSchemaMigrator implementation.
 */
public class NullKasherkDbSchemaMigrator : IKasherkDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
