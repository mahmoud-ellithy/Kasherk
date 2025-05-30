using eLite.Kasherk.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace eLite.Kasherk.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(KasherkEntityFrameworkCoreModule),
    typeof(KasherkApplicationContractsModule)
)]
public class KasherkDbMigratorModule : AbpModule
{
}
