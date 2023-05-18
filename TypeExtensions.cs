using System.ComponentModel.DataAnnotations;
using System.Reflection;

namespace BlazorAnimationSample
{
    public static class TypeExtensions
    {


        /// <summary>
        ///     A generic extension method that aids in reflecting 
        ///     and retrieving any attribute that is applied to an `Enum`.
        /// </summary>
        public static TAttribute? GetAttribute<TAttribute>(this Enum enumValue)
                where TAttribute : Attribute
        {
            return enumValue?.GetType()
                            ?.GetMember(enumValue.ToString())
                            ?.FirstOrDefault()
                            ?.GetCustomAttribute<TAttribute>();
        }

        public static string? GetDisplayName(this Enum enumValue)
        {
            return GetAttribute<DisplayAttribute>(enumValue)?.Name;
        }

    }
}
