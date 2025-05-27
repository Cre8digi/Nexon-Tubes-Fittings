import * as React from "react"
import { cn } from "@/lib/utils"

export const Select = ({ children, className, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) => {
  return (
    <select
      className={cn(
        "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        className
      )}
      {...props}
    >
      {children}
    </select>
  )
}

export const SelectTrigger = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("relative", className)} {...props}>
    {children}
  </div>
)

export const SelectValue = ({ children, className }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className={cn("text-sm text-black", className)}>{children}</span>
)

export const SelectContent = ({ children, className }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("absolute mt-1 w-full rounded-md border border-gray-300 bg-white shadow-lg", className)}>
    {children}
  </div>
)

export const SelectItem = ({ children, value, className, ...props }: React.OptionHTMLAttributes<HTMLOptionElement>) => (
  <option value={value} className={cn("py-2 px-3 text-sm text-black", className)} {...props}>
    {children}
  </option>
)
