export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      analytics_distributions: {
        Row: {
          category: string
          created_at: string | null
          department: string | null
          distribution_type: string
          id: string
          metadata: Json | null
          scope: string
          user_id: string | null
          value: number
        }
        Insert: {
          category: string
          created_at?: string | null
          department?: string | null
          distribution_type: string
          id?: string
          metadata?: Json | null
          scope: string
          user_id?: string | null
          value: number
        }
        Update: {
          category?: string
          created_at?: string | null
          department?: string | null
          distribution_type?: string
          id?: string
          metadata?: Json | null
          scope?: string
          user_id?: string | null
          value?: number
        }
        Relationships: []
      }
      analytics_metrics: {
        Row: {
          created_at: string | null
          department: string | null
          id: string
          metadata: Json | null
          metric_type: string
          scope: string
          updated_at: string | null
          user_id: string | null
          value: number
        }
        Insert: {
          created_at?: string | null
          department?: string | null
          id?: string
          metadata?: Json | null
          metric_type: string
          scope: string
          updated_at?: string | null
          user_id?: string | null
          value: number
        }
        Update: {
          created_at?: string | null
          department?: string | null
          id?: string
          metadata?: Json | null
          metric_type?: string
          scope?: string
          updated_at?: string | null
          user_id?: string | null
          value?: number
        }
        Relationships: []
      }
      analytics_performance: {
        Row: {
          benchmark: number | null
          created_at: string | null
          department: string | null
          id: string
          metadata: Json | null
          percentile: number | null
          performance_metric: string
          scope: string
          score: number
          trend: string | null
          user_id: string | null
        }
        Insert: {
          benchmark?: number | null
          created_at?: string | null
          department?: string | null
          id?: string
          metadata?: Json | null
          percentile?: number | null
          performance_metric: string
          scope: string
          score: number
          trend?: string | null
          user_id?: string | null
        }
        Update: {
          benchmark?: number | null
          created_at?: string | null
          department?: string | null
          id?: string
          metadata?: Json | null
          percentile?: number | null
          performance_metric?: string
          scope?: string
          score?: number
          trend?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      analytics_progress: {
        Row: {
          achievements: Json | null
          completed: number
          created_at: string | null
          department: string | null
          id: string
          metadata: Json | null
          progress_type: string
          scope: string
          streak: number | null
          total: number
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          achievements?: Json | null
          completed?: number
          created_at?: string | null
          department?: string | null
          id?: string
          metadata?: Json | null
          progress_type: string
          scope: string
          streak?: number | null
          total?: number
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          achievements?: Json | null
          completed?: number
          created_at?: string | null
          department?: string | null
          id?: string
          metadata?: Json | null
          progress_type?: string
          scope?: string
          streak?: number | null
          total?: number
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      analytics_trends: {
        Row: {
          chart_type: string
          created_at: string | null
          department: string | null
          id: string
          metadata: Json | null
          period: string
          scope: string
          user_id: string | null
          value: number
        }
        Insert: {
          chart_type: string
          created_at?: string | null
          department?: string | null
          id?: string
          metadata?: Json | null
          period: string
          scope: string
          user_id?: string | null
          value: number
        }
        Update: {
          chart_type?: string
          created_at?: string | null
          department?: string | null
          id?: string
          metadata?: Json | null
          period?: string
          scope?: string
          user_id?: string | null
          value?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
