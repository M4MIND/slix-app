$switchName = $args[0]
$ip = $args[1]
$mask = $args[2]
$vmName = $args[3]


If($switchName -in (Get-VMSwitch -SwitchType Internal | Select-Object -ExpandProperty Name)) {
    Remove-VMSwitch $switchName
}

If($switchName -in (Get-VMSwitch -SwitchType Internal | Select-Object -ExpandProperty Name) -eq $FALSE) {
    New-VMSwitch -Name $switchName -SwitchType Internal

    New-NetIPAddress -IPAddress $ip -PrefixLength $mask -InterfaceAlias "vEthernet ($switchName)"

    "Nat switch configured -> ($switchName)"


    If($switchName -in (Get-VMSwitch | Select-Object -ExpandProperty Name)) {
        Get-VM $vmName | Add-VMNetworkAdapter -SwitchName $switchName -name $switchName

        "Include switch to Virtual machine -> ($vmName)"
    }
}
else {
    "Nat switch already -> ($switchName)"
}

#Get-VM slix-app-web-server | Set-VMSwitch Switch -NetAdapterName Switch