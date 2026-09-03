import { Card, Flex, Text, Button, Box } from '@sanity/ui'
import { NavbarProps } from 'sanity'

export function CustomNavbar(props: NavbarProps) {
  return (
    <Box>
      <Card padding={3} tone="caution" borderBottom>
        <Flex justify="space-between" align="center">
          <Text weight="bold" size={2}>
            🧠 Painel de Controle - Luany Frateschi
          </Text>
          <Button
            as="a"
            href="https://luany-frateschi.celsolucoesadm.workers.dev"
            target="_blank"
            rel="noopener noreferrer"
            text="Visualizar Site"
            tone="primary"
          />
        </Flex>
      </Card>
      {props.renderDefault(props)}
    </Box>
  )
}