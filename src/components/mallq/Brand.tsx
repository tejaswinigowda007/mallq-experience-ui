import { Building2, ShoppingBag } from "lucide-react";

export function MallQLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative grid size-11 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-soft">
        <Building2 className="size-5" aria-hidden="true" />
        <ShoppingBag className="absolute -right-1 -bottom-1 size-5 rounded-full bg-peach p-1 text-foreground" aria-hidden="true" />
      </div>
      {!compact && (
        <div className="leading-tight">
          <div className="font-display text-xl font-extrabold text-foreground">MallQ</div>
          <div className="text-xs font-medium text-muted-foreground">Your Smart Mall Experience</div>
        </div>
      )}
    </div>
  );
}
