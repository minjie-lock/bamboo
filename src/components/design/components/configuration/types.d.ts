
export type ConfigurationProps = {
  children: React.ReactNode;
  scheme?: {
    components: {
      button?: {
        round: number;
        color: {
          primary?: string;
          default?: string;
          success?: string;
          danger?: string;
          warning?: string;
        }
      }
    }
  }
}
