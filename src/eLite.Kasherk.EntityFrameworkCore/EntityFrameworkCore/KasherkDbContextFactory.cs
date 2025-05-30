using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace eLite.Kasherk.EntityFrameworkCore;

/* This class is needed for EF Core console commands
 * (like Add-Migration and Update-Database commands) */
public class KasherkDbContextFactory : IDesignTimeDbContextFactory<KasherkDbContext>
{
    public KasherkDbContext CreateDbContext(string[] args)
    {
        var configuration = BuildConfiguration();
        
        KasherkEfCoreEntityExtensionMappings.Configure();

        var builder = new DbContextOptionsBuilder<KasherkDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));
        
        return new KasherkDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../eLite.Kasherk.DbMigrator/"))
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
